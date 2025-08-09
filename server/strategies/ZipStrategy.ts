import type BackupStrategy from '../contracts/strategy.contract'

export default class ZipStrategy implements BackupStrategy {
    public run: BackupStrategy['run'] = async ({ plan, targets }) => {
        // Implement the ZIP backup logic here
        console.log('create zip')
    }
}
