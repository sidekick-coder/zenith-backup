import validator from '#shared/services/validator.service.ts'

const schema = validator.create(v => v.object({
    path: v.string(),
    options: v.any()
}))

const targetValidator = {
    schema,
    create: validator.create(v => v.omit(schema, ['options'])),
    update: validator.create(v => v.partial(schema))
}

export default targetValidator
