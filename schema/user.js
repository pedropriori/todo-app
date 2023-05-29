const z = require("zod");

const userSchema = z.object({
    name: z.string({
        required_error: "Name must be required"
    }).min(3),
    email: z.string().email("Invalid email."),
    password: z.string({
        required_error: "Password must be required"
    }).min(8)
})

module.exports = { userSchema }