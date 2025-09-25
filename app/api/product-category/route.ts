
import { ProductCategory } from "@/app/modules/models/productCategory.model"
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server"

// create a category
export async function POST(req: Request) {
    try {
        const categoryData = await req.json()
        await connectDB()

        const existingCategory = await ProductCategory.findOne({ name: categoryData.name })

        if (existingCategory) {
            return NextResponse.json({ success: false, error: 'Category already exist' }, { status: 409 })
        }

        const categoryRes = await ProductCategory.create(categoryData)

        return NextResponse.json({ success: true, data: categoryRes }, { status: 201 })

    } catch (error: unknown) {
        return NextResponse.json(
            { success: false, error: error },
            { status: 500 }
        )
    }
}



// Get all product categories
export async function GET() {
    try {
        await connectDB()
        const categories = await ProductCategory.find()
        return NextResponse.json({ success: true, message: 'All categories retrived', data: categories }, { status: 200 })
    }catch(error: unknown){
        return NextResponse.json({success: false, message: error}, {status: 500})
    }
} 