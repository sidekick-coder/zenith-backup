import fs from 'fs'
import path from 'path'
import archiver from 'archiver'
import { format } from 'date-fns'
import type BackupStrategy from '../contracts/strategy.contract'
import { tmpPath } from '#server/utils/paths.ts'
import drive from '#server/facades/drive.facade.ts'

export default class ZipStrategy implements BackupStrategy {
    public run: BackupStrategy['run'] = async ({ plan, targets }) => {
        const planDrive = drive.use(plan.options.drive_id)

        const tmpFolder = tmpPath(`backups/${plan.id}`)
        const destinationFolderInDrive = plan.options.folder || '/'

        if (!fs.existsSync(tmpFolder)) {
            await fs.promises.mkdir(tmpFolder, { recursive: true })
        }

        for await (const target of targets) {
            const basename = path.basename(target.path)
            const filename = format(new Date(), 'yyyy-MM-dd_HH-mm-ss') + `__${basename}.zip`
            const tmpCompresedFilename = path.resolve(tmpFolder, filename)
            const filenameInDrive = path.join(destinationFolderInDrive, filename)

            await this.compress(target.path, tmpCompresedFilename)

            await planDrive.writeFromLocalFile(tmpCompresedFilename, filenameInDrive)
        }
    }

    /**
     * Compresses the target file/folder into a zip at the destination filepath using archiver.
     */
    public async compress(targetFilePath: string, destFilePath: string): Promise<void> {
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
                archive.file(targetFilePath, { name: path.basename(targetFilePath) })
            }

            archive.finalize()
        })
    }
}
