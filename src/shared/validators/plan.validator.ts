import validator from '#shared/services/validator.service.ts'

const strategies = ['tar', 'restic']

const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.optional(v.string()),
    strategy: v.picklist(strategies),
    cron: v.string(),
    options: v.any()
}))

const tarOptions = validator.create(v => v.object({
    drive_id: v.optional(v.string()),
    folder: v.optional(v.string()) 
}))

const resticOptions = validator.create(v => v.object({
    repository_type: v.optional(v.string()),
    repository: v.optional(v.string()),
    drive_id: v.optional(v.string()),
    folder: v.optional(v.string()),
    password: v.optional(v.string()),
    backup_flags: v.optional(v.string()),
    forget_enabled: v.optional(v.boolean()),
    forget_flags: v.optional(v.string())
}))

const planValidator = {
    schema,
    strategies,
    tarOptions,
    resticOptions,
    create: validator.create(v => v.omit(schema, ['cron', 'options'])),
    update: validator.create(v => v.partial(v.omit(schema, ['strategy']))),
}

export default planValidator