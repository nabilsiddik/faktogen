import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  return (
    <div className="bg-white border-1 border-white rounded-full flex items-center gap-5 px-10 py-2 text-black">
      <input type="text" placeholder="Search on X-Mart" className=" text-black  border-0 focus:outline-0 w-full lg:flex-10 flex-3" />
      <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center cursor-pointer flex-1">
        <FaSearch />
      </div>
    </div>
  )
}

export default HeaderSearch
