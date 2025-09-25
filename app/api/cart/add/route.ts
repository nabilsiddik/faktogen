import { User } from "@/app/modules/models/user.models"
import { auth } from "@/auth"
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        await connectDB();
        const { productId, quantity } = await req.json()

        const session = await auth()
        const userId = session?.user?.id

        // Find logged in user
        const user = await User.findOne({ _id: userId })

        if (!user) {
            return NextResponse.json({
                success: false,
                errorMessage: 'User not found'
            }, { status: 404 })
        }

        const alreadyOnCart = user?.cart?.find((cartItem: {product: string, quantity: number}) => productId.toString() === cartItem?.product.toString())

        // If already on cart just increase the quantity
        if(alreadyOnCart){
            alreadyOnCart.quantity += quantity
            user.save()

            return NextResponse.json({
                success: true,
                message: 'Product successfully Added to cart.',
                data: user?.cart
            }, { status: 200 })
        }

        // If not on on cart add to cart first time with quantity
        user.cart.push({
            product: productId,
            quantity
        })

        await user.save()


        return NextResponse.json({
                success: true,
                message: 'Product successfully Added to cart.',
                data: user?.cart
            }, { status: 200 })

    } catch (error: unknown) {
        console.log(error)
        return NextResponse.json({
            success: false,
            error: error,
            errorMessage: 'Add to cart failed'
        }, { status: 500 })
    }
}