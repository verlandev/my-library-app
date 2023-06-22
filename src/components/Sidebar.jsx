import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { TbLayoutGridAdd } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, handleCloseSidebar}) => {


  const toggleSidebar = () => {
    handleCloseSidebar()
  }
   
  return (
    <aside 
      className={`${!sidebarOpen ? "w-0" : "w-1/4"} fixed top-0 left-0 bg-white bg-opacity-80 transition-all ease-linear duration-300`}
      >
        <div>
          <ul className={`${!sidebarOpen && "invisible"} flex flex-col w-full h-screen gap-5 justify-center ml-10`}>
            <li className='flex border w-2/3 flex-row justify-left gap-2 items-center text-xl'><TbLayoutGridAdd />Home</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        
          <IoIosClose 
            className=' cursor-pointer text-7xl text-slate-600 absolute top-5 right-10 hover:text-cyan-600 transition-colors duration-300'
            onClick = {(toggleSidebar)} 
          />
      </div>
    </aside>
  )
}

export default Sidebar
