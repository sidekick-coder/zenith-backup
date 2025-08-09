import validator from '#shared/services/validator.service.ts'

const schema = validator.create(v => v.object({
    drive_id: v.string(),
    folder: v.string()
}))

const destinationValidator = {
    schema,
    create: schema,
    update: validator.create(v => v.partial(schema))
}

export default destinationValidator
