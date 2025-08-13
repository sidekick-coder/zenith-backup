import fs from 'fs'
import cp from 'child_process'
import path from 'path'
import * as tar from 'tar'
import { format, parse } from 'date-fns'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import { findTargetByMeta, findTargetMeta } from '../queries/target.query.ts'
import { tmpPath } from '#server/utils/paths.ts'
import driveService from '#server/facades/drive.facade.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import logger from '#server/facades/logger.facade.ts'
import db from '#server/facades/db.facade.ts'

export default class TarStrategy implements BackupStrategy {
    public async findSnapshotTarget(planId: number, snapshotId: string){
        const [_date, filename] = snapshotId.split('__')

        const basename = path.basename(filename, '.tar.gz')

        const targetBySlug = await findTargetByMeta(planId, 'slug', basename)

        if (targetBySlug) {
            return targetBySlug
        }

        const targetByPath = await db.selectFrom('backup_targets')
            .where('backup_plan_id', '=', planId)
            .where('deleted_at', 'is', null)
            .where('path', 'like', `%${basename}`)
            .selectAll()
            .executeTakeFirst()

        if (targetByPath) {
            return targetByPath
        }

        return undefined

    }

    public list: BackupStrategy['list'] = async ({ plan }) => {

        const drive = driveService.use(plan.options.drive_id)
        const files = await drive.list(plan.options.folder || '/')

        const filteredFiles = files.filter(f => {
            if (!f.name.endsWith('.tar.gz')) {
                return false
            }

            return true
        })

        const snapshots: Snapshot[] = []

        for (const file of filteredFiles) {
            const [date] = file.name.split('__')

            const target = await this.findSnapshotTarget(plan.id, file.name)

            if (!target) continue

            snapshots.push(new Snapshot({
                id: file.name,
                plan_id: plan.id,
                target_id: target.id,
                created_at: parse(date, 'yyyy-MM-dd_HH-mm-ss', new Date()),
                metadata: {  }
            }))
        }

        return snapshots
    }

    public backup: BackupStrategy['backup'] = async ({ plan, targets }) => {
        if (!plan.options.drive_id) {
            logger.warn(`Drive ID not set for plan ${plan.id}. Skipping backup.`)
            return
        }
        const planDrive = driveService.use(plan.options.drive_id)

        const tmpFolder = tmpPath(`backups/${plan.id}`)
        const destinationFolderInDrive = plan.options.folder || '/'

        if (!fs.existsSync(tmpFolder)) {
            await fs.promises.mkdir(tmpFolder, { recursive: true })
        }

        for await (const target of targets) {
            const slug = await findTargetMeta(target.id, 'slug')

            const basename = slug?.value || path.basename(target.path)

            const filename = format(new Date(), 'yyyy-MM-dd_HH-mm-ss') + `__${basename}.tar.gz`
            const tmpCompresedFilename = path.resolve(tmpFolder, filename)
            const filenameInDrive = path.join(destinationFolderInDrive, filename)

            await this.compress(target.path, tmpCompresedFilename)

            await planDrive.upload(tmpCompresedFilename, filenameInDrive)
        }
    }

    public restore: BackupStrategy['restore'] = async ({ plan, snapshot }) => {
        const drive = driveService.use(plan.options.drive_id)

        const target = await db
            .selectFrom('backup_targets')
            .where('id', '=', snapshot.target_id)
            .selectAll()
            .executeTakeFirst()

        if (!target) return

        const tmpFolder = tmpPath(`backups/${plan.id}`)
        const destinationFolderInDrive = plan.options.folder || '/'

        if (!fs.existsSync(tmpFolder)) {
            await fs.promises.mkdir(tmpFolder, { recursive: true })
        }

        const filenameInDrive = path.join(destinationFolderInDrive, snapshot.id)
        const compressedFilename = path.resolve(tmpFolder, path.basename(filenameInDrive))
        const uncompressedFilename = path.resolve(tmpFolder, path.basename(filenameInDrive, '.tar.gz'))

        await drive.download(filenameInDrive, compressedFilename)
        await this.decompress(compressedFilename, uncompressedFilename)

        // use rsync to sync files
        cp.execSync(`rsync -av --delete ${uncompressedFilename}/ ${target.path}/`, { stdio: 'inherit' })

        await fs.promises.rm(tmpFolder, {
            recursive: true,
            force: true 
        })
    }

    public delete: BackupStrategy['delete'] = async ({ plan, snapshotId }) => {
        const planDrive = driveService.use(plan.options.drive_id)
        const destinationFolderInDrive = plan.options.folder || '/'
        const filenameInDrive = path.join(destinationFolderInDrive, snapshotId)

        await planDrive.delete(filenameInDrive)
    }

    /**
     * Compresses the target file/folder into a tar.gz at the destination filepath using tar.
     */
    public async compress(targetFilePath: string, destFilePath: string): Promise<void> {
        const stat = fs.statSync(targetFilePath)
        
        if (stat.isDirectory()) {
            await tar.create(
                {
                    gzip: true,
                    file: destFilePath,
                    cwd: path.dirname(targetFilePath)
                },
                [path.basename(targetFilePath)]
            )
        }
        
        if (stat.isFile()) {
            await tar.create(
                {
                    gzip: true,
                    file: destFilePath,
                    cwd: path.dirname(targetFilePath)
                },
                [path.basename(targetFilePath)]
            )
        }
    }

    public async decompress(source: string, destination: string): Promise<void> {
        // Ensure destination directory exists
        if (!fs.existsSync(destination)) {
            await fs.promises.mkdir(destination, { recursive: true })
        }
        
        await tar.extract({
            file: source,
            cwd: destination,
            strip: 1
        })
    }
}
