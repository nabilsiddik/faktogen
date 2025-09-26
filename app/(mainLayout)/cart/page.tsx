import CartTable from '@/components/cartTable'
import { Button } from '@/components/ui/button'
import { getCartProducts } from '@/utils/GetCartProducts'
import { getCartTotal } from '@/utils/getCartTotal'
import React from 'react'

const CartPage = async() => {
  const cartProducts = await getCartProducts()
  const cartTotal = await getCartTotal(cartProducts)
  return (
    <div className='container mx-auto px-5 flex gap-5'>
      <div className='flex-5'>
        <CartTable/>
      </div>
      <div className='flex-2 bg-gray-200 rounded-lg p-5'>
        <h2 className='font-bold text-2xl mb-3'>Cart Total</h2>
        <div className='flex items-center justify-between gap-3 border-b border-gray-400 pb-5'>
            <h3 className='text-xl font-bold'>Subtotal:</h3>
            <span>BDT {cartTotal}</span>
        </div>

        <div className='mb-3 border-b border-gray-400 pb-5'></div>

        <div className='flex items-center justify-between gap-3 mb-4'>
            <h3 className='text-xl font-bold'>Total:</h3>
            <span>BDT {cartTotal}</span>
        </div>
        <Button className='w-full rounded-full' size='lg'>Procced To checkout</Button>
      </div>
    </div>
  )
}

export default CartPage
