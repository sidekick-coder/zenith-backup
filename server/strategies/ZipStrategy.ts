import fs from 'fs'
import archiver from 'archiver'
import type BackupStrategy from '../contracts/strategy.contract'
import drive from '#server/facades/drive.facade.ts'


export default class ZipStrategy implements BackupStrategy {
    public run: BackupStrategy['run'] = async ({ plan, targets }) => {
        const planDrive = drive.use(plan.options.drive_id)

        for await (const target of targets) {
            
        }
    }

    /**
     * Compresses the target file/folder into a zip at the destination filepath using archiver.
     */
    public async compressToZip(targetFilePath: string, destFilePath: string): Promise<void> {
        const output = fs.createWriteStream(destFilePath)
        const archive = archiver('zip', { zlib: { level: 9 } })

        return new Promise((resolve, reject) => {
            output.on('close', resolve)
            archive.on('error', reject)
            archive.pipe(output)

            // Add file or directory
            const stat = fs.statSync(targetFilePath)
            if (stat.isDirectory()) {
                archive.directory(targetFilePath, false)
            }
            if (stat.isFile()) {
                archive.file(targetFilePath, { name: require('path').basename(targetFilePath) })
            }

            archive.finalize()
        })
    }
}
