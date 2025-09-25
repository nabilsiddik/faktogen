'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaRegHeart } from "react-icons/fa";
import StarRatings from 'react-star-ratings';
import { shortText } from '@/utils/shortText';
import Link from 'next/link';
import { Iproduct } from '@/interfaces/product.interface';

const ProductItemCard = ({ product }: {product: Iproduct}) => {
    return (
        <Link href={`/product/${product._id}`}>
            <div className='relative bg-gray-50 px-3 py-3 rounded-sm shadow-sm'>

                {/* add to favourite  */}
                <div className='absolute top-2 right-2 text-xl cursor-pointer'>
                    <FaRegHeart />
                </div>

                {/* featured image  */}
                <Image className='mx-auto' src={product?.featuredImage} width={300} height={200} alt='featured image' />

                {/* add to cart button  */}
                <Button className='rounded-full cursor-pointer my-3'>Add Cart</Button>

                {/* title, description, price */}
                <div className='mt-3 flex flex-col gap-2  text-sm'>
                    <h3 className='font-bold text-lg'>{shortText(product.title, 60)}</h3>
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
        </Link>
    )
}

export default ProductItemCard
