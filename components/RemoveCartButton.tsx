'use client'
import { IoMdClose } from "react-icons/io";

const RemoveCartButton = ({productId}: {productId: string}) => {

    // Remove cart item
    const handleRemoveCartItem = async (productId: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
        })

        console.log('amar res', res)
    }

    return <IoMdClose onClick={() => handleRemoveCartItem(productId)} />
}

export default RemoveCartButton
