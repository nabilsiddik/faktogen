import { auth } from "@/auth";
import HeaderSearch from "@/components/HeaderSearch"
import Logo from "@/components/Logo"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiCircleList } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/components/LogoutButton";
import { getCartTotal } from "@/utils/getCartTotal";


const Header = async () => {

  const session = await auth()
  const cartTotal = await getCartTotal()

  return (
    <header className="bg-primary h-[90px] flex items-center mx-auto px-10 gap-10 mb-5">
      <div className="flex-2">
        <Logo />
      </div>
      <div className="flex-5">
        <HeaderSearch />
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
            <div className="text-2xl border-white flex flex-col items-center">
              <div className="relative">
                <MdOutlineShoppingCart />
                <div className="w-[20px] h-[20px] bg-yellow-400 text-sm text-black font-bold flex items-center justify-center rounded-full absolute top-[-10px] right-[-5px]">0</div>
              </div>
              <span className="text-sm">BDT {cartTotal}</span>
            </div>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href={'/'} className="flex items-center gap-2">
                  <div className="text-2xl">
                    <FiUser />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Account</span>
                    <span className="font-bold text-sm">Settings</span>
                  </div>

                  <div>
                    <IoIosArrowDown />
                  </div>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {session?.user &&
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Dashboard
                      <DropdownMenuShortcut>
                        <MdOutlineDashboard />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>
                        <CgProfile />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      My Orders
                      <DropdownMenuShortcut>
                        <CiCircleList />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                }
                <DropdownMenuSeparator />
                {session?.user ?
                  <DropdownMenuItem>
                    <LogoutButton/>
                    <DropdownMenuShortcut>
                      <RxExit />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  :
                  <DropdownMenuItem>
                    <Link href='/signup'>Create Account</Link>
                    <DropdownMenuShortcut>
                      <MdOutlineAccountCircle />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

        </ul>
      </div>
    </header>
  )
}

export default Header
