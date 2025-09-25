'use server'

import { Product } from "@/app/modules/models/product.models"
import { uploadBufferToCloudinary } from "@/config/cloudinary.config"
import { productZodSchema } from "@/lib/validations/productZodSchema"
import { connectDB } from "@/utils/db"

// Create product action
export const createProduct = async (data: FormData) => {
    const productData = Object.fromEntries(data.entries())
    // parse json product data
    // const rawData = data.get('productData') as string
    // const parsedData = JSON.parse(rawData)

    // const parsed = productZodSchema.safeParse(parsedData)

    // if (!parsed.success) {
    //     console.log('Validation failed:', parsed.error.flatten().fieldErrors)
    //     return // just return void
    // }

    // // handle featured image
    // const file = data.get('featuredImage') as File | null
    // let imageUrl = ''
    // if (file) {
    //     const buffer = Buffer.from(await file.arrayBuffer())
    //     const result = await uploadBufferToCloudinary(buffer, file.name)
    //     imageUrl = result?.secure_url || ''
    // }

    try {
        await connectDB()
        await Product.create(productData)
        console.log('Product created successfully')
    } catch (error: unknown) {
        console.log('Error creating product:', error)
    }
}
