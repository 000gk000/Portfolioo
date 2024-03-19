const {z} = require("zod")

// we need to create object schema

const signupSchema = z.object(
    {
        username:z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{msg:"name must be at least 3 characters"})
        .max(255,{msg:"name not be more than 255 characters"}),

        email:z
        .string({required_error:"email is required"})
        .trim()
        .min(3,{msg:"emial must be at least 3 characters"})
        .max(255,{msg:"email not be more than 255 characters"}),


        phone:z
        .string({required_error:"phone is required"})
        .trim()
        .min(10,{msg:"phone must be at least 10 characters"})
        .max(255,{msg:"phone not be more than 255 characters"}),


        password:z
        .string({required_error:"password is required"})
        .trim()
        .min(8,{msg:"password must be at least 8 characters"})
        .max(255,{msg:"password not be more than 255 characters"}),

    }
)

module.exports = signupSchema;