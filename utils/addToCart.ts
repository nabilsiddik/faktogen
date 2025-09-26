'use client'

import { Dispatch, SetStateAction } from "react"

// Add to cart product
 export const handleAddToCart = async (productId: string, setIsOnCart?: Dispatch<SetStateAction<boolean | undefined>>) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId,
                quantity: 1
            })
        })

        if (res.ok) {
            setIsOnCart?.(true)
        }

        console.log(res)
    }