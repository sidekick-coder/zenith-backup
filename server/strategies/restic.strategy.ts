import cp from 'node:child_process'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import driveService from '#server/facades/drive.facade.ts'
import db from '#server/facades/db.facade.ts'
import Meta from '#shared/entities/meta.entity.ts'
import type DriveContract from '#server/contracts/drive.contract.ts'
import FsDrive from '#server/gateways/FsDrive.ts'
import BaseException from '#server/exceptions/base.ts'
import logger from '#server/facades/logger.facade.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'

export default class ResticStrategy implements BackupStrategy {
    public async createEnviroment(planId: number) {
        const metaRows = await db
            .selectFrom('backup_plan_metas')
            .selectAll()
            .where('plan_id', '=', planId)
            .execute()

        if (metaRows.length === 0) {
            throw new BaseException('No metadata found')
        }

        const metas = Meta.metasToObjects(metaRows.map(m => new Meta(m)))

        if (metas.repository_type === 'raw') {
            return {
                ...process.env,
                RESTIC_REPOSITORY: metas.repository,
                RESTIC_PASSWORD: metas.password,
            }
        }

        let drive: DriveContract | undefined = undefined

        if (metas.drive_id) {
            drive = driveService.getDrive(metas.drive_id)
        }

        if (metas.repository_type === 'drive' && drive instanceof FsDrive){
            return {
                ...process.env,
                RESTIC_REPOSITORY: drive.absolutePath(metas.folder),
                RESTIC_PASSWORD: metas.password,
            }
        }

        throw new BaseException('Error mounting restic variables')
    }

    public list: BackupStrategy['list'] = async ({ plan }) => {
        const enviroment = await this.createEnviroment(plan.id)
        const targets = await db.selectFrom('backup_targets')
            .$call(whereNotDeleted)
            .where('plan_id', '=', plan.id)
            .selectAll()
            .execute()

        const output = cp.execSync('restic snapshots --json', { env: enviroment })
        const resticSnapshots = JSON.parse(output.toString())

        const snapshots: Snapshot[] = []

        for (const resticSnapshot of resticSnapshots) {
            for (const path of resticSnapshot.paths) {
                const target = targets.find(t => t.path === path)

                if (!target) continue

                snapshots.push(new Snapshot({
                    id: `${resticSnapshot.short_id}:${path}`,
                    plan_id: plan.id,
                    target_id: target.id,
                    metadata: {
                        restic_id: resticSnapshot.id,
                        restic_short_id: resticSnapshot.short_id,
                        time: resticSnapshot.time,
                        tree: resticSnapshot.tree,
                        path: path,
                        hostname: resticSnapshot.hostname,
                        username: resticSnapshot.username,
                        uid: resticSnapshot.uid,
                        gid: resticSnapshot.gid,
                        program_version: resticSnapshot.program_version,
                        parent: resticSnapshot.parent
                    },
                    created_at: new Date(resticSnapshot.time)
                }))
            }
        }

        return snapshots
    }

    public backup: BackupStrategy['backup'] = async ({ plan, targets }) => {
        const enviroment = await this.createEnviroment(plan.id)

        const paths = targets.map(t => t.path).join(' ')
        const command = `restic backup ${paths}`
        
        logger
            .child({
                planId: plan.id,
                command 
            })
            .debug(`running restic backup: ${command}`)

        cp.execSync(command, { env: enviroment })
    }

    public restore: BackupStrategy['restore'] = async ({ plan: _plan, snapshot: _snapshot }) => {
        throw new Error('Not implemented')
    }

    public delete: BackupStrategy['delete'] = async ({ plan: _plan, snapshotId: _snapshotId }) => {
        throw new Error('Not implemented')
    }
}