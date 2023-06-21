import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = ({setSidebarOpen}) => {

  const [sidebarClose, setSidebarClose] = useState(false)

  const handleCloseSidebar = () => {
    setSidebarClose(true)
  }
   
  return (
    <aside 
      className={"transition-width duration-300 fixed inset-0 bg-white bg-opacity-80 w-1/4"}
      >
        <div 
          className= {"flex flex-row"}>
          <ul className='flex flex-col w-full h-screen gap-5 justify-center ml-10'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        
          <button 
            className='rotate-45 cursor-pointer text-7xl text-slate-600 absolute top-5 right-10'
            onClick = {handleCloseSidebar} 
          >
          +
          </button>
      </div>
    </aside>
  )
}

export default Sidebar
