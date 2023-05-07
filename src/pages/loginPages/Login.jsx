import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './../../assets/pluma.png'
import { useState } from "react";
import Alert from "../../components/Alert";
import axios from "axios";


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(false)
  
  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')) {
      setAlert({
        msg: "Todos los campos son obligatorios", 
        error: true
      })
      return
    }

    try {
      
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, { email, password })
      
      localStorage.setItem('token', data.token)
      setAlert({})
      
    } catch (error) {
      setAlert({
        msg: error.response.data.msg, 
        error: true
      })
      
    }

  }

  const { msg } = alert

  return (
    <>
      <img
        src={logo}
        className="invert w-1/5 mx-auto"
       />
      <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
        SHELFIE<br></br>
        <span className="text-slate-400">Inicia sesión</span>
      </h1>

      { msg && <Alert alert = {alert} />}

      <form 
        className="my-10 bg-slate-700 shadow rounded-lg px-10 pb-10 pt-5"
        onSubmit={handleSubmit}
        >
        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribe tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 border-slate-500 outline-sky-200 placeholder:text-slate-200"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 border-slate-500 outline-sky-200 placeholder:text-slate-200"
            value={password}
            onChange={ e => setPassword(e.target.value) }
          />
        </div>

        <input
          type="submit"
          value="Entra ahora"
          className="block w-2/3 mx-auto py-2 bg-cyan-500 rounded-xl text-center uppercase text-white tracking-wide font-medium mt-10 cursor-pointer hover:bg-cyan-600 transition-colors duration-300 ease-linear focus:outline-none"
        />
        <p className="text-center py-3 text-gray-50 ">
        O
        </p>
        <Link
          to="register"
          className="block w-2/3 mx-auto py-2 border rounded-xl text-center uppercase text-cyan-400 tracking-wide font-medium cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-colors duration-300 ease-linear focus:outline-none "
        >
          Regístrate
        </Link>
        <Link
          to="forgot-password"
          className="mt-10 block m-auto w-1/2 text-center font-medium text-white text-base hover:text-cyan-400 transition-colors transition-duration-300 ease-linear tracking-wide"
        >
          ¿Has olvidado tu contraseña?
        </Link>
      </form>
    </>
  );
};

export default Login;
