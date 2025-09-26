'use client'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import OffCanvasCartItem from "./OffCanvasCartItem";
import { getCartTotal } from "@/utils/getCartTotal";
import Link from "next/link";

export const OffcanvasCart = ({ children }: { children: React.ReactNode }) => {

    const [open, setOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState<any[]>([])
    const [cartTotal, setCartTotal] = useState<number | null>(0)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`)
                const data = await res.json()
                setCartProducts(data?.data)
            } catch (err) {
                console.error(err)
            }
        }


        fetchCart()
    }, [cartProducts])


    useEffect(() => {
        const calculateCartTotal = async () => {
            try {
                const data = await getCartTotal(cartProducts)
                setCartTotal(data)
            } catch (err) {
                console.error(err)
            }
        }
        calculateCartTotal()

    }, [cartProducts])

    return (
        <div>
            <Drawer open={open} onOpenChange={setOpen} direction="right">
                <DrawerTrigger>
                    {children}
                </DrawerTrigger>
                <DrawerContent className="max-h-screen overflow-y-auto overflow-x-hidden">
                    <DrawerHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <DrawerTitle className="text-xl">Shopping Cart</DrawerTitle>
                            <span onClick={() => setOpen(false)} className='text-2xl cursor-pointer'><IoClose /></span>
                        </div>
                    </DrawerHeader>
                    <div className="p-5">
                        {cartProducts.length > 0 && cartProducts.map((productItem, index) => {
                            return <OffCanvasCartItem key={index} productItem={productItem} />
                        })}
                    </div>
                    <DrawerFooter>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold">Subtotal:</h3>
                            <span>BDT {cartTotal}</span>
                        </div>
                        <Link href={'/cart'}>
                            <Button className="w-full rounded-full my-3" size={'lg'} variant={'outline'}>View Cart</Button>
                        </Link>
                        <Button className="w-full rounded-full mb-3" size={'lg'}>Checkout</Button>
                        <DrawerClose>
                            <Button variant='destructive' className="w-full rounded-full">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

