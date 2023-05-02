import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "../../components/Alert";
import axios from 'axios'
import logo from './../../assets/pluma.png'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [alert, setAlert] = useState({})

    const handleSubmit = async element => {
        element.preventDefault();

        if([name, email, password, repeatPassword].includes('')){
            setAlert({
                msg:'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if(password !== repeatPassword) {
            setAlert({
                msg:'Las contraseñas no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6) {
            setAlert({
                msg:'La contraseña tiene que tener un mínimo de 6 caracteres',
                error: true
            })
            return
        }

        setAlert({})

        // Creating users in the API

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {name, email, password})

            setAlert({
                msg: data.msg, 
                error: false
            })

            setName('')
            setEmail('')
            setPassword('')
            setRepeatPassword('')

        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
            
        }
    }

    const {msg} = alert

 return (
    <>
      <img
        src={logo}
        className="invert w-1/5 mx-auto"
       />
      <h1 className="text-gray-500 text-3xl font-bold tracking-wide text-center">
        Crea tu cuenta en <br></br>
        <span className="text-slate-400">SHELFIE</span>
      </h1>

      <form 
        className="my-10 w-4/5 m-auto bg-slate-700 shadow rounded-lg px-10 pb-10 pt-5"
        onSubmit={handleSubmit}
        >
        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="email"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Escribe tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 border-slate-500 outline-sky-200 placeholder:text-slate-200"
            value={name}
            onChange={element => setName(element.target.value)}
          />
        </div>

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
            value={email}
            onChange={element => setEmail(element.target.value)}
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
            onChange={element => setPassword(element.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="password2"
          >
            Repite contraseña
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repite la contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 border-slate-500 outline-sky-200 placeholder:text-slate-200"
            value={repeatPassword}
            onChange={element => setRepeatPassword(element.target.value)}
          />
        </div>

        {msg && <Alert alert ={alert} />}

        <input
          type="submit"
          value="Crea tu cuenta"
          className="block w-2/3 mx-auto py-2 bg-cyan-500 rounded-xl text-center uppercase text-white tracking-wide font-medium mt-10 cursor-pointer hover:bg-cyan-600 transition-colors duration-300 ease-linear focus:outline-none"
        />
        <p className="text-center py-3 text-gray-50 ">
        O
        </p>
         <Link
          to="/"
          className="block w-2/3 mx-auto py-2 border rounded-xl text-center uppercase text-cyan-400 tracking-wide font-medium cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-colors duration-300 ease-linear focus:outline-none "
        >
          Inicia sesión
        </Link>
      </form>

      {/* <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center text-neutral-500 text-sm hover:text-neutral-300 transition transition-duration-300 ease-lineal tracking-wide"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav> */}

      
    </>
  );
};

export default Register;
