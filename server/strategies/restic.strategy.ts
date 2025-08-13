import type BackupStrategy from '../contracts/strategy.contract.ts'

export default class ResticStrategy implements BackupStrategy {
    public list: BackupStrategy['list'] = async ({ plan }) => {
        return []
    }

    public backup: BackupStrategy['backup'] = async ({ plan, snapshot }) => {
        throw new Error('Not implemented')
    }

    public restore: BackupStrategy['restore'] = async ({ plan, snapshot }) => {
        throw new Error('Not implemented')
    }

    public delete: BackupStrategy['delete'] = async ({ plan, snapshot }) => {
        throw new Error('Not implemented')
    }
}