import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
        Crea tu cuenta y genera tu propia {""}
        <span className="text-slate-700">librería</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold tracking-wide"
            htmlFor="email"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Escribe tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 outline-sky-200"
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribe tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 outline-sky-200"
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold tracking-wide"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 outline-sky-200"
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold tracking-wide"
            htmlFor="password2"
          >
            Repite contraseña
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Vuelve a escribir tu contraseña para acceder"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 outline-sky-200"
          />
        </div>

        <input
          id="submit"
          value="Crear cuenta"
          className="block w-2/3 mx-auto py-2 bg-sky-700 rounded text-center uppercase text-white tracking-wide font-medium mt-10 cursor-pointer hover:bg-sky-900 transition-colors duration-300 ease-linear focus:outline-none"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center text-slate-500 text-sm hover:text-slate-800 transition transition-duration-300 ease-lineal tracking-wide"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
};

export default Register;
