import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
    return (
        <div className='bg-primary py-2 text-white'>
            <div className='container px-5 mx-auto flex justify-between items-center'>
                <div>
                    <ul className='flex items-center gap-3'>
                        <li>faktogen@gmail.com</li>
                        <li>|</li>
                        <li>+8801957282230</li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <ul className='flex gap-3 text-lg'>
                        <li>
                            <Link href='https://www.facebook.com' target='_blank'>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.facebook.com' target='_blank'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.facebook.com' target='_blank'>
                                <PiYoutubeLogoBold />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.facebook.com' target='_blank'>
                                <FaXTwitter />
                            </Link>
                        </li>
                    </ul>
                    <div>|</div>
                    <ul className='flex gap-3'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
