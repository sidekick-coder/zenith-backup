import validator from '#shared/services/validator.service.ts'

const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.optional(v.string()),
    strategy: v.picklist(['zip', 'restic']),
    cron: v.string(),
    options: v.any()
}))

const zipOptions = validator.create(v => v.object({
    drive_id: v.optional(v.string()),
    folder: v.optional(v.string()) 
}))

const planValidator = {
    schema,
    zipOptions,
    create: validator.create(v => v.omit(schema, ['cron', 'options'])),
    update: validator.create(v => v.partial(v.omit(schema, ['strategy']))),
}

export default planValidator