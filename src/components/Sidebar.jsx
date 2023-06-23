import React from "react";
import { IoIosClose } from "react-icons/io";
import { IoMdSettings } from "react-icons/io"
import { ImBooks } from "react-icons/im"
import { TbLayoutGridAdd } from "react-icons/tb";
import { GiFallingStar } from "react-icons/gi"
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, handleCloseSidebar }) => {
  const toggleSidebar = () => {
    handleCloseSidebar();
  };

  return (
    <aside
      className={`${
        !sidebarOpen ? "w-0" : "w-1/4"
      } fixed top-0 left-0 bg-white bg-opacity-80 transition-all ease-linear duration-300`}
    >
      <div>
        <ul
          className={`${
            !sidebarOpen && "invisible"
          } flex flex-col content-center w-full h-screen gap-5 justify-center pl-10 tracking-widest`}
        >
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-xl text-slate-600 relative  w-fit"
          >
            <TbLayoutGridAdd className="text-3xl" />
            <p className="relative after:h-[4px] after:bg-teal-500 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full hover:after:transition-all hover:after:duration-500 after:duration-500">
              Home
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-xl text-slate-600 relative  w-fit"
          >
            <ImBooks className="text-3xl" />
            <p className="relative after:h-[4px] after:bg-teal-500 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full hover:after:transition-all hover:after:duration-500 after:duration-500">
              Mi biblioteca
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-xl text-slate-600 relative  w-fit"
          >
            <GiFallingStar className="text-3xl" />
            <p className="relative after:h-[4px] after:bg-teal-500 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full after:transition-all hover:after:duration-500 after:duration-500">
              Mi top 10
            </p>
          </Link>
          <Link
            to="/libraries"
            className="flex flex-row justify-left gap-4 items-center text-xl text-slate-600 relative  w-fit"
          >
            <IoMdSettings className="text-3xl" />
            <p className="relative after:h-[4px] after:bg-teal-500 after:w-0 after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full after:transition-all hover:after:duration-500 after:duration-500">
              Ajustes
            </p>
          </Link>
        </ul>

        <IoIosClose
          className=" cursor-pointer text-7xl text-slate-600 absolute top-5 right-10 hover:text-cyan-600 transition-colors duration-300"
          onClick={toggleSidebar}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
