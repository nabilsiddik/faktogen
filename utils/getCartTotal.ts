import { Iproduct } from "@/interfaces/product.interface"
import { getCartProducts } from "./GetCartProducts"

interface IProductItem {
    product: {
        _id: string,
        title: string,
        price: number,
        featuredImage: string
    }
    _id: string,
    quantity: number
}

export const getCartTotal = async () => {
    const cartProducts = await getCartProducts()

    const cartTotal = cartProducts.reduce((acc: number, productItem: IProductItem) => {
        return acc + (productItem?.product?.price * productItem.quantity)
    }, 0)

    return cartTotal
}