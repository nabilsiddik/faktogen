'use client'
import Image from 'next/image'
import React from 'react'
import { IoMdClose } from "react-icons/io";

const OffCanvasCartItem = (productItem: any) => {

    // Remove cart item
    const handleRemoveCartItem = async(productId: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId})
        })

        console.log('amar res', res)
    }

    return (
        <div className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3 border-b mb-5 pb-5'>
                <Image src={productItem?.productItem.product?.featuredImage} width={100} height={100} alt={productItem?.product?.title} />
                <div>
                    <h3 className='font-bold text-sm mb-2'>{productItem?.productItem.product?.title}</h3>
                    <div className='flex items-center gap-3 text-sm'>
                        <p>BDT {productItem?.productItem.product?.price}</p>
                        <p>Items {productItem?.productItem?.quantity}</p>
                    </div>
                </div>
            </div>

            <div>
                <IoMdClose onClick={() => handleRemoveCartItem(productItem?.productItem?.product?._id)} className='w-5 h-5 bg-gray-100 flex items-center justify-center rounded-full cursor-pointer'/>
            </div>
        </div>
    )
}

export default OffCanvasCartItem
