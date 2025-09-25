import { auth } from '@/auth'
import ProductItemCard from '@/components/ProductItemCard'
import { Iproduct } from '@/interfaces/product.interface'
import { getAllProducts } from '@/utils/getAllProducts'

const ProductSection = async() => {

    const allProducts = await getAllProducts() || []
    
    const session = await auth()

    console.log('server comp', session)

    return (
        <section className='my-20'>
            <div className="container mx-auto px-5">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                    {allProducts?.data?.length > 0 && allProducts?.data?.map((product: Iproduct) => {
                        return <ProductItemCard key={product._id} product={product} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductSection
