import {z} from 'zod'

export const productZodSchema = z.object({
  title: z.string("Title is required"),
  featuredImage: z.string('Featured Image is required'),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  category: z.string("Category is required"),
  oldPrice: z.number().optional(),
  price: z.number("Price is required"),
  features: z.array(
    z.object({
      key: z.string('Key Is Required'),
      value: z.union([z.string(), z.number()])
    })
  ).optional()
});
