import Navbar from "../components/navbar/Navbar"
import SideBar from "../components/sidebar/SideBar"

export const Home = () => {
  return (<div className="flex h-screen flex-col gap-20">
    <div className=" bg-sky-300  w-full">
      <Navbar/>
    </div>

      <div className="flex flex-col-6  h-[450px]  w-full  bg-slate-600">
        <SideBar/>
        <div className="w-full flex flex-col-6 p-3  gap-4 flex-wrap h-full overflow-y-scroll  bg-black">
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
          <div className="h-52 w-52 bg-white"></div>
        </div>
      </div>
  </div>
  )
}
