import React from "react";
import logoMenu from "../assets/menu.png";
import logo from "../assets/pluma.png";


const Header = () => {
  return (
    <header className="flex md:flex-row md:justify-center m-auto w-1/2 py-10">
        <div className="w-full flex md:flex-col justify-center">
            <img
                src={logo}
                className="invert w-20 mb-2 mx-auto"
            />
            <h2 className="text-gray-200 text-2xl mb-10 text-center font-bold tracking-widest">
                SHELFIE
            </h2>
            <input
                type="search"
                placeholder="¿Qué libro quieres?"
                className="w-full rounded-md outline-sky-400 px-2 placeholder:text-slate-400 placeholder:text-center"
            />
        </div>
        <div>
            
        </div>
    </header>
  );
};

export default Header;
