import productCategoryModel from "@/app/modules/models/productCategory.model"
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server"

export async function POST(req: Request){
    try{
        const category = await req.json()
        await connectDB()
        const productCategory = await productCategoryModel.create(category)

        return NextResponse.json({success: true, productCategory}, {status: 201})

    }catch(error: any){
        return NextResponse.json(
            {success: false, error: error.message},
            {status: 500}
        )
    }
}