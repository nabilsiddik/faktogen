'use client'

import React from 'react'
import Topbar from './Topbar'
import MainHeader from './MainHeader'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathName = usePathname()
  const hideHeader = pathName.startsWith('/dashboard')

  return !hideHeader 
    ? 
      <div>
        <Topbar />
        <MainHeader />
        <Navbar />
      </div>
    : null
}

export default Header
