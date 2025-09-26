import { User } from "@/app/modules/models/user.models"
import { auth } from "@/auth"

export const getCartProducts = async() => {
    const session = await auth()
    const userId = session?.user?.id 

    if(!userId){
        throw new Error('User is not authenticated.')
    }

    const user = await User.findOne({_id: userId}).populate({
        path: 'cart.product',
        select: '_id title price featuredImage'
    })

    if(!user){
        throw new Error('User Not Found')
    }
    
    return user.cart

}