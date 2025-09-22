'use client'
import { products } from '@/app/data/products'
import ProductItemCard from '@/components/ProductItemCard'
import React from 'react'

const ProductSection = () => {
    return (
        <section className='my-20'>
            <div className="container mx-auto px-5">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                    {products?.length > 0 && products.map((product) => {
                        return <ProductItemCard key={product.id} product={product} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductSection
