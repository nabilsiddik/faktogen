import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const ProductItemCard = ({ product }: any) => {
    return (
        <div className='text-center border py-10 rounded-md shadow-md'>
            <Image className='mx-auto' src={product?.featuredImage} width={300} height={200} alt='product featured image' />
            <div className='mt-3 flex flex-col gap-3 items-center'>
                <Badge>{product?.category}</Badge>
                <h3 className='font-bold text-2xl'>{product?.title}</h3>
                <p>{product?.shortDescription}</p>
                <div className='flex gap-3'>
                    <span>$<del>{product?.regularPrice}</del></span>
                    <span>${product?.discountedPrice}</span>
                </div>
                <Button>Add Cart</Button>
            </div>
        </div>
    )
}

export default ProductItemCard
