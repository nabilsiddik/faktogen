import HeaderSearch from "@/components/HeaderSearch"
import Logo from "@/components/Logo"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";


const Header = () => {
  return (
    <header className="bg-primary h-[90px] flex items-center mx-auto px-10 gap-10">
      <div className="flex-2">
        <Logo/>
      </div>
      <div className="flex-5">
        <HeaderSearch/>
      </div>
      <div className="flex-2 flex justify-end">
        <ul className="text-white flex items-center gap-6">
          <li>
            <Link href={'/'} className="flex items-center gap-3">
            <div className="text-2xl">
              <FaRegHeart />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Order</span>
              <span className="font-bold text-sm">Favourites</span>
            </div>
          </Link>
          </li>
          <li>
            <Link href={'/'} className="flex items-center gap-2">
            <div className="text-2xl">
              <FiUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Sign In</span>
              <span className="font-bold text-sm">Account</span>
            </div>
          </Link>
          </li>
          <li>
            <div className="text-2xl border-white flex flex-col">
              <MdOutlineShoppingCart />
              <span className="text-sm">1000</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
