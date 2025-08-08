import db from '#server/facades/db.facade.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#server/services/validator.service.ts'

const group = router.prefix('/api/backup/plans')
    .use(authMiddleware)
    .group()


group.get('/', async () => {
    const data = await db.selectFrom('backup_plans')
        .selectAll()
        .execute()

    return { data }
})

group.post('/', async ({ body }) => {
    const payload = validator.validate(body, v => v.object({ 
        name: v.string(), 
        strategy: v.picklist(['zip', 'restic'])
    }))

    const plan = await db.insertInto('backup_plans')
        .values(payload)
        .returningAll()
        .execute()

    console.log('Created backup plan:', plan)

    return plan
})