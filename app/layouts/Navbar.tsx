import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-t border-b border-gray'>
      <div className="container mx-auto px-5 flex items-center justify-between">
          <div className='flex items-center gap-5'>
            <div className='bg-primary px-7 font-bold py-3 text-white'>
              Browse Categories
            </div>
            <div>
              <ul className='flex items-center gap-3'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/shop'>Shop</Link>
                </li>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className='flex items-center gap-3'>
                <li>
                  <Link href='/'>SPECIAL OFFERS</Link>
                </li>
                <li>|</li>
                <li>
                  <Link href='/shop'>COMBO PACKAGES</Link>
                </li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar
