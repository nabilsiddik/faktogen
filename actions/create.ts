'use server'

import { Product } from "@/app/modules/models/product.models"
import { productZodSchema } from "@/lib/validations/productZodSchema"
import { connectDB } from "@/utils/db"

// Create product action
export const createProduct = async(productData: unknown) => {
    const parsed = productZodSchema.safeParse(productData)

    if(!parsed.success){
        return {success: false, errors: parsed.error.flatten().fieldErrors}
    }

    try{
        await connectDB()
        const product = await Product.create(parsed.data)

        return {success: true, data: JSON.stringify(product)}
    }catch(error: any){
        return {success: false, error: error.message}
    }
}
