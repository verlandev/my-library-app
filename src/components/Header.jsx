import React from "react";
import logoMenu from "../assets/menu.png";
import logo from "../assets/pluma.png";

const Header = () => {
  return (
    <header className=" m-auto me-0 w-full py-10">
      <div className="flex md:flex-row md:justify-center">
        <img src={logoMenu} className="w-10 invert ml-10 cursor-pointer" />
        <input
          type="search"
          placeholder="Buscar"
          className="w-1/4 m-auto rounded-lg px-2 text-center placeholder:tracking-widest outline-sky-400"
        />
        <button
          type="button"
          className="border w-40 text-gray-100 mr-10 rounded-lg tracking-wider hover:border-cyan-600 hover:bg-cyan-600 transition-colors duration-300 ease-linear focus:outline-none"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
