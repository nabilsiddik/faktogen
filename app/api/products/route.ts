import { Product } from "@/app/modules/models/product.models";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
        const products = await Product.find()
        return NextResponse.json({success: true, message: 'All products retrived successfully', data: products}, {status: 201})
    }catch(error: unknown){
        return NextResponse.json({success: false, error: error}, {status: 500})
    }
}