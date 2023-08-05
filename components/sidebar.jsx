"use client"
import { useState } from "react"

const sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="h-screen">
      <div className={` transition-all delay-150 ${expanded ? "w-52" : "w-5"} h-full flex flex-col bg-white border-r shadow-sm`}>
        <button onClick={() => setExpanded((prev) => !prev)} className={` h-16 w-[98%] mx-auto overflow-hidden transition-all delay-150 ${expanded ? 'w-52' : 'w-5 '} p-15 bg-gray-50 rounded-lg hover:bg-gray-100`}>
          {expanded ? "SideBar" : "S"}
        </button>
        <ul>
          <li className={` overflow-hidden transition-all delay-150 ${expanded ? 'w-52' : 'w-0'} relative flex items-center py-2 px-0 my-1 font-medium rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-800`}>
            Sample Text
          </li>
          <li className={` overflow-hidden transition-all delay-150 ${expanded ? 'w-52' : 'w-0'} relative flex items-center py-2 px-0 my-0 font-medium rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-800`}>
            Sample Text
          </li>
          <li className={` overflow-hidden transition-all delay-150 ${expanded ? 'w-52' : 'w-0'} relative flex items-center py-2 px-0 my-0 font-medium rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-800`}>
            Sample Text
          </li>
          <li className={` overflow-hidden transition-all delay-150 ${expanded ? 'w-52' : 'w-0'} relative flex items-center py-2 px-0 my-0 font-medium rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-800`}>
            Sample Text
          </li>
        </ul>
      </div>

    </div>
  )
}

export default sidebar