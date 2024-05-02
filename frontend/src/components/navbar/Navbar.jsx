import { FaSearch, FaUserCircle } from "react-icons/fa";
import Input from '../Input'

export default function Navbar() {
  return (
    <>
    <div className="flex w-full h-20 fixed bg-blue-400  items-center justify-between">
        <div className="flex justify-end text-white px-5 ">
        <h1>company name</h1>     
    </div>
        <div className="flex justify-start gap-3 px-2 items-center bg-white w-72 h-10 rounded-full  ">
        <FaSearch ame="text-white size-10 "/> 
        <Input outline={"none"} h={"10"} w={"60px"} />
        </div>
        <div className="flex justify-end items-center gap-2 text-white w-auto px-5  ">
        <h1>username</h1>
        <FaUserCircle className="text-white size-10 "/> 
        </div>
    </div>
    </>
  )
}
