const z = required("zod");

const taskSchema = z.object({
    name: z.string({
        required_error: "Name must be required"
    }).min(3),
    description: z.string({
        required_error: "Empty Description"
    }).min(3),
    isDone: z.boolean()
})

module.exports = { taskSchema }