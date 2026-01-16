import z from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(3, "Password must be at least 3 characters")
})

export const signInSchema = signUpSchema.omit({name: true})

export const createCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(5, "Please select a category"),
    tagline: z.string().min(5),
    description: z.string().min(10),
    thumbnail: z.any().refine((file) => file?.name, {message: "Thumbnail is required"})
})