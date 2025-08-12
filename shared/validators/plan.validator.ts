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

const planValidator = {
    schema,
    strategies,
    tarOptions,
    create: validator.create(v => v.omit(schema, ['cron', 'options'])),
    update: validator.create(v => v.partial(v.omit(schema, ['strategy']))),
}

export default planValidator