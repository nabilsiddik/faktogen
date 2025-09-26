'use client'

import { handleAddToCart } from "@/utils/addToCart"
import { Button } from "./ui/button"
import { useState } from "react";
import { Iproduct } from "@/interfaces/product.interface";

const AddToCartButton = ({ product, classNames }: { product: Iproduct, classNames?: string }) => {

    const [isOnCart, setIsOnCart] = useState(product?.isOnCart)

    return (
        <div>
            {isOnCart ?
                <Button onClick={() => handleAddToCart(product?._id as string, setIsOnCart)} className={`${classNames && classNames}`} size={'lg'}>Added</Button>
                :
                <Button onClick={() => handleAddToCart(product?._id as string, setIsOnCart)} className={`${classNames && classNames}`} size={'lg'}>Add to Cart</Button>
            }
        </div>
    )
}

export default AddToCartButton
