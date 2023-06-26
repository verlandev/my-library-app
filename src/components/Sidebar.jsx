import React from "react";
import { IoIosClose } from "react-icons/io";
import { IoMdSettings } from "react-icons/io"
import { ImBooks } from "react-icons/im"
import { TbLayoutGridAdd } from "react-icons/tb";
import { BiSolidBookReader } from "react-icons/bi"
import { FiLogOut } from "react-icons/fi"
import { Link } from "react-router-dom";
import logo from "../assets/pluma.png";


const Sidebar = ({ sidebarOpen, handleCloseSidebar }) => {
  const toggleSidebar = () => {
    handleCloseSidebar();
  };

  return (
    <aside
      className={`${
        !sidebarOpen ? "w-0" : "w-[20%]"
      } fixed top-0 left-0 bg-white bg-opacity-80 transition-all ease-linear duration-300`}
    >
      <div className={`${
            !sidebarOpen && "invisible"
          } flex flex-col content-center w-full h-screen gap-5 justify-around pl-10 tracking-widest text-lg`}>

        <ul
          className="flex flex-col content-center relative w-full gap-4 justify-center pl-3 mt-10 tracking-widest text-lg after:content-[''] after:absolute after:h-[2px] after:w-100 after:bg-slate-800"
        >
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-slate-600 relative w-fit"
          >
            <TbLayoutGridAdd className="text-2xl text-yellow-600" />
            <p className="relative after:h-[3px] after:bg-yellow-600 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full hover:after:transition-all hover:after:duration-500 after:duration-500">
              Home
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-slate-600 relative w-fit"
          >
            <ImBooks className="text-2xl text-yellow-600" />
            <p className="relative after:h-[3px] after:bg-yellow-600 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full hover:after:transition-all hover:after:duration-500 after:duration-500">
              Mi biblioteca
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-slate-600 relative w-fit"
          >
            <BiSolidBookReader className="text-2xl text-yellow-600" />
            <p className="relative after:h-[3px] after:bg-yellow-600 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full after:transition-all hover:after:duration-500 after:duration-500">
              Mi top 10
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-slate-600 relative w-fit"
          >
            <IoMdSettings className="text-2xl text-yellow-600" />
            <p className="relative after:h-[3px] after:bg-yellow-600 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full after:transition-all hover:after:duration-500 after:duration-500">
              Ajustes
            </p>
          </Link>
        </ul>

        <Link
          to="/"
          className="flex flex-row gap-2 items-center pb-5 pr-5 justify-end text-base hover:text-yellow-600 transition-colors duration-500"
          >
          <FiLogOut/>
          Salir
        </Link>

        <IoIosClose
          className=" cursor-pointer text-6xl text-slate-600 absolute top-7 right-3 hover:text-yellow-600 transition-colors duration-300"
          onClick={toggleSidebar}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
