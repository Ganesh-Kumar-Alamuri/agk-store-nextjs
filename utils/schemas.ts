import {unknown, z,ZodSchema} from 'zod'

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
});

export function validateWithZodSchema<T>(schema:ZodSchema<T>,data:unknown):T{
    const result = schema.safeParse(data)
    if(!result.success)
    {
        const errors = result.error.errors.map((error)=>error.message)
        throw new Error(errors.join(", "))
    }
    return result.data
}

function validateImage(){
    const maxFileSize = 1024*1024
    const acceptedFormats = ['image/']
    return z.instanceof(File).refine((file)=>{
        return !file||file.size<=maxFileSize
    },{message:'File size must be less than 1MB'}).refine((file)=>{
        return !file || acceptedFormats.some((type)=>file.type.startsWith(type))
    },{message:"File should be an image"})
}

export const imageSchema = z.object({
    image:validateImage()
})

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== "", {
    message: "Product ID cannot be empty",
  }),
  authorName: z.string().refine((value) => value !== "", {
    message: "Author name cannot be empty",
  }),
  authorImageUrl: z.string().refine((value) => value !== "", {
    message: "Author image URL cannot be empty",
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters long" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),
});