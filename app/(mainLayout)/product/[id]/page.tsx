import { Product } from "@/app/modules/models/product.models"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";


const page = async ({ params }: any) => {

  const { id } = params
  const product = await Product.findOne({ _id: id })

  return (
    <div className="container mx-auto px-5 flex gap-10">
      <div className="flex-2">
        <Image src={product?.featuredImage} width={500} height={500} alt={product?.title} />
      </div>
      <div className="flex-2 flex flex-col gap-3">
        <Badge>{product?.category}</Badge>
        <h2 className="font-bold text-3xl">{product?.title}</h2>
        <div className="flex items-center gap-3 text-sm">
          <span>*****(4.8)</span>
          <span>|</span>
          <span>55 Ratings</span>
        </div>

        <hr />

        <div className="flex flex-col gap-2s">
          <h3 className="font-bold">About this item:</h3>
          <p>{product?.shortDescription}</p>
          <span className="text-sm font-bold flex items-center gap-2">See Full Details <IoIosArrowDown /></span>
        </div>
      </div>

      <div className="flex-1 text-sm flex flex-col gap-2 bg-gray-100 py-3 px-3 rounded-md">
         <div className="flex items-center gap-3">
          <h2 className="font-bold text-primary text-2xl">BDT {product?.price}</h2>
          <del>BDT {product?.oldPrice}</del>
         </div>

         <div className="flex items-center gap-3">
          <Badge>You Save</Badge>
          <span>BDT {product?.oldPrice - product?.price}</span>
         </div>

         <div>
          <Button className='rounded-full mt-3 w-full' size={'lg'}>Add to Cart</Button>
         </div>
      </div>
    </div>
  )
}

export default page
