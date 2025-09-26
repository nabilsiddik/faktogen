import { Product } from "@/app/modules/models/product.models"
import { User } from "@/app/modules/models/user.models"
import { auth } from "@/auth"
import { Mongoose } from "mongoose"
import { NextResponse } from "next/server"

export const removeProductFromCart = async(productId: string) => {
    if(!productId){
        throw new Error('User id or product id not available.')
    }

    const session = await auth()
    const userId = session?.user?.id

    if(!session || !userId){
        return NextResponse.json({success: false, message: 'User is not authorized.'}, {status: 403})
    }

    const user = await User.findOne({_id: userId})

    if(!user){
        return NextResponse.json({success: false, message: 'User not found.'}, {status: 404})
    }

    // Remove cart item from cart
    user.cart = user?.cart?.filter((item: any) => item?.product.toString() !== productId.toString())


    const product = await Product.findOne({_id: productId})

    if(!product){
        return NextResponse.json({success: false, message: 'Product not found.'}, {status: 404})
    }

    product.isOnCart = false

    product.save()
    user.save()

    return user.cart
    
}