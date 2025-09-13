import React from 'react'
import Logo from '../../components/Logo'
import { Button } from '@/components/ui/button'
import MainHeaderSearchBar from '@/components/MainHeaderSearchBar'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

const MainHeader = () => {
  return (
    <div className='py-4'>
      <div className="container mx-auto px-5 flex items-center gap-5 justify-between">
        <div className='flex-1'>
          <Logo />
        </div>
        <div className='flex-3'>
          <MainHeaderSearchBar />
        </div>
        <div className='flex justify-end'>
          <div className='flex-1 flex items-center gap-3'>
            <Button>Login/Register</Button>
            <span className='text-lg'><FaRegHeart /></span>
            <span className='text-lg'><RiShoppingCart2Line /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
