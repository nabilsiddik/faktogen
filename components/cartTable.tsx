import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ICartProduct } from "@/interfaces/product.interface"
import { getCartProducts } from "@/utils/GetCartProducts"
import Image from "next/image"
import RemoveCartButton from "./RemoveCartButton"

export default async function CartTable() {
  const cartProducts = await getCartProducts()

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProducts.length > 0 && cartProducts.map((item: ICartProduct) => (
            <TableRow key={item._id}>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Image src={item?.product?.featuredImage as string} height={60} width={60} alt={item?.product?.title as string}/>
                  <div className="max-w-[300px]">
                    <div className="font-bold">{item?.product?.title}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>BDT {item?.product?.price}</TableCell>
              <TableCell>{item?.quantity}</TableCell>
              <TableCell>BDT {(item?.product?.price as number * item?.quantity)}</TableCell>
              <TableCell className="text-right">
                <RemoveCartButton productId = {item?.product?._id as string}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
