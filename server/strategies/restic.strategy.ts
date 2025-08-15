import cp from 'node:child_process'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import driveService from '#server/facades/drive.facade.ts'
import type DriveContract from '#server/contracts/drive.contract.ts'
import FsDrive from '#server/gateways/FsDrive.ts'
import BaseException from '#server/exceptions/base.ts'
import logger from '#server/facades/logger.facade.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'

export default class ResticStrategy implements BackupStrategy {
    public async createEnviroment(plan: Plan) {
        const metas = plan.metas 

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

    public list: BackupStrategy['list'] = async ({ plan, targets }) => {
        const enviroment = await this.createEnviroment(plan)

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
        const enviroment = await this.createEnviroment(plan)

        const paths = targets.map(t => t.path).join(' ')
        
        let command = 'restic backup'

        if (plan.metas.backup_flags) {
            command += ` ${plan.metas.backup_flags}`
        }

        command += ` ${paths}`
        
        logger
            .child({
                planId: plan.id,
                command 
            })
            .debug(`running restic backup: ${command}`)

        cp.execSync(command, { env: enviroment })
    }

    public restore: BackupStrategy['restore'] = async ({ plan, snapshot, target, restore_folder }) => {
        const enviroment = await this.createEnviroment(plan)
        
        const resticId = snapshot.metadata.restic_short_id
        const path = snapshot.metadata.path
        
        if (!resticId) {
            throw new BaseException('Restic ID not found in snapshot metadata')
        }
        
        if (!path) {
            throw new BaseException('Path not found in snapshot metadata')
        }

        // Use restore_folder if provided, otherwise use target.path
        const restorePath = restore_folder || target.path

        const command = `restic restore ${resticId}:${path} --target ${restorePath}`
        
        logger
            .child({
                planId: plan.id,
                snapshotId: snapshot.id,
                targetId: target.id,
                restorePath,
                command 
            })
            .debug(`running restic restore: ${command}`)

        cp.execSync(command, { env: enviroment })
    }

    public delete: BackupStrategy['delete'] = async ({ plan, snapshot }) => {
        const enviroment = await this.createEnviroment(plan)        
        const resticId = snapshot.metadata.restic_id
        
        if (!resticId) {
            throw new BaseException('Restic ID not found in snapshot metadata')
        }

        const command = `restic forget ${resticId} --prune`
        
        logger
            .child({
                planId: plan.id,
                snapshotId: snapshot.id,
                command 
            })
            .debug(`running restic delete: ${command}`)

        cp.execSync(command, { env: enviroment })
    }
}