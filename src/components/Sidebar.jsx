import React from 'react'
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
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        
          <button 
            className='rotate-45 cursor-pointer text-7xl text-slate-600 absolute top-5 right-10'
            onClick = {(toggleSidebar)} 
          >
          +
          </button>
      </div>
    </aside>
  )
}

export default Sidebar
