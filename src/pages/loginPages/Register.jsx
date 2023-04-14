import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "../../components/Alert";
import axios from 'axios'

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
            const {data} = await axios.post('http://localhost:3000/users', {name, email, password})

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
      <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
        Crea tu cuenta y genera tu propia {""}
        <span className="text-slate-700">librería</span>
      </h1>

      <form 
        className="my-10 bg-white shadow rounded-lg px-10 py-5"
        onSubmit={handleSubmit}
        >
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
            value={name}
            onChange={element => setName(element.target.value)}
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
            value={email}
            onChange={element => setEmail(element.target.value)}
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
            value={password}
            onChange={element => setPassword(element.target.value)}
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
            value={repeatPassword}
            onChange={element => setRepeatPassword(element.target.value)}
          />
        </div>

        {msg && <Alert alert ={alert} />}

        <input
          type="submit"
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
