import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaRegHeart } from "react-icons/fa";
import StarRatings from 'react-star-ratings';

const ProductItemCard = ({ product }: any) => {
    return (
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
                <h3 className='font-bold text-lg'>{product?.title}</h3>
                <p className='text-sm'>{product?.shortDescription}</p>
                <div className='flex gap-3'>
                    <span><del>{product?.regularPrice}</del></span>
                    <span className='font-bold'>BDT {product?.discountedPrice}</span>
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
