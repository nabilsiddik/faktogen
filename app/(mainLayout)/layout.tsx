import Header from '@/layouts/Header'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default layout
