import validator from '@sidekick-coder/zenith-kit/shared/facades/validator'

const schema = validator.create(v => v.object({
    plan_id: v.number(),
    path: v.string(),
    options: v.any()
}))

const targetValidator = {
    schema,
    create: validator.create(v => v.omit(schema, ['options'])),
    update: validator.create(v => v.partial(schema))
}

export default targetValidator
