import { User } from "@/app/modules/models/user.models";
import { IUser } from "@/interfaces/user.interface";
import { connectDB } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const {fullName, email, password}: IUser = await req.json()
    try{
        await connectDB()

        const user = await User.findOne({email})
        
        if(user){
            throw new Error('User already exist with this email.')
        }

        const hashedPassword = await bcrypt.hash(password as string, Number(process.env.SALT_ROUND))

        const hashedUser = {
            fullName,
            email,
            password: hashedPassword
        }

        const result = await User.create(hashedUser)


        return NextResponse.json({success: true, message: 'User registration successful', data: result}, {status: 201})

    }catch(error: unknown){
        console.log(error)
        return NextResponse.json({success: false, error: error}, {status: 500})
    }
}