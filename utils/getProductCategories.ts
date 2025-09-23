import { ProductCategory } from "@/app/modules/models/productCategory.model"
import { connectDB } from "./db"

export const getProductCategories = async() => {
    await connectDB()
    const categories = await ProductCategory.find()
    return categories
}