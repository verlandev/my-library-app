import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
        Inicia sesión y admnistra tu {""}
        <span className="text-slate-700">librería</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
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

        <input
          id="submit"
          value="Entra ahora"
          className="block w-2/3 mx-auto py-2 bg-sky-700 rounded text-center uppercase text-white tracking-wide font-medium mt-10 cursor-pointer hover:bg-sky-900 transition-colors duration-300 ease-linear focus:outline-none"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="register"
          className="block text-center text-slate-500 text-sm hover:text-slate-800 transition transition-duration-300 ease-lineal tracking-wide"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          to="forgot-password"
          className="block text-center text-slate-500 text-sm hover:text-slate-800 transition transition-duration-300 ease-lineal tracking-wide"
        >
          He olvidado mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Login;
