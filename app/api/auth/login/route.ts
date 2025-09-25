import { User } from "@/app/modules/models/user.models";
import { connectDB } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const {email, password}: any = await req.json()
    try{
        await connectDB()

        const user = await User.findOne({email})
        
        if(!user){
            return NextResponse.json({ error: 'User not found' }, { status: 401 })
        }

        const isPasswordMatch = await bcrypt.compare(password, user?.password)

        if(!isPasswordMatch){
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
        }

        return NextResponse.json({success: true, message: 'User login successful', data: user}, {status: 200})

    }catch(error: any){
        console.log(error)
        return NextResponse.json({success: false, message: error.message}, {status: 500})
    }
}