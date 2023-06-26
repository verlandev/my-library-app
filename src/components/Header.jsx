import React from "react";
import logoMenu from "../assets/menu.png";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  
  const handleOpenSidebar = () => {
    setSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }
 
  return (
    <header className=" m-auto me-0 w-full py-10">
      <div className="flex md:flex-row md:justify-center">
        <img 
          src={logoMenu} 
          className={`${sidebarOpen ? "invisible w-10 ml-10" : "w-10 invert ml-10 cursor-pointer transtion-all duration-300"}`}
          onClick={handleOpenSidebar} 
          />
        <input
          type="search"
          placeholder="Buscar"
          className="w-1/4 m-auto rounded-lg px-2 text-center placeholder:tracking-widest outline-sky-400"
        />
        <button
          type="button"
          className="border w-40 text-gray-100 mr-10 rounded-lg tracking-wider hover:border-cyan-600 hover:bg-cyan-600 transition-all duration-300 focus:outline-none"
        >
          Mi perfil
        </button>
      </div>
       { setSidebarOpen && <Sidebar sidebarOpen={sidebarOpen} handleCloseSidebar={handleCloseSidebar}  />}
    </header>
  );
};

export default Header;
