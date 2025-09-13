import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Image src='/images/logo/faktogen-logo.png' width={250} height={200} alt='logo' />
        </div>
    )
}

export default Logo
