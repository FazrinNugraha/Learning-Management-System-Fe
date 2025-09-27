import z from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(3, "Password must be at least 3 characters")
})