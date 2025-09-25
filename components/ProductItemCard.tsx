'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaRegHeart } from "react-icons/fa";
import StarRatings from 'react-star-ratings';
import { shortText } from '@/utils/shortText';
import Link from 'next/link';
import { Iproduct } from '@/interfaces/product.interface';

const ProductItemCard = ({ product }: { product: Iproduct }) => {

    // Add to cart product
    const handleAddToCart = async (productId: string) => {
        console.log(productId)
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

        console.log(res)
    }

    return (
        <div className='relative bg-gray-50 px-3 py-3 rounded-sm shadow-sm'>
            {/* add to favourite  */}
            <div className='absolute top-2 right-2 text-xl cursor-pointer'>
                <FaRegHeart />
            </div>

            <Link href={`/product/${product._id}`}>
                {/* featured image  */}
                <Image className='mx-auto' src={product?.featuredImage} width={300} height={200} alt='featured image' />
            </Link>

            {/* add to cart button  */}
            <Button onClick={() => handleAddToCart(product?._id as string)} className='rounded-full cursor-pointer my-3'>Add Cart</Button>

            {/* title, description, price */}
            <div className='mt-3 flex flex-col gap-2  text-sm'>
                <Link href={`/product/${product._id}`}>
                    <h3 className='font-bold text-lg'>{shortText(product.title, 60)}</h3>
                </Link>

                <div className='flex gap-3'>
                    <span><del>{product?.oldPrice}</del></span>
                    <span className='font-bold'>BDT {product?.price}</span>
                </div>
            </div>

            {/* ratings  */}
            <div className='flex items-center gap-3'>
                <StarRatings
                    rating={3.5}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name='rating'
                    starDimension="18px"
                    starSpacing="2px"
                />
                <span className='text-sm'>(5089)</span>
            </div>
        </div>
    )
}

export default ProductItemCard
