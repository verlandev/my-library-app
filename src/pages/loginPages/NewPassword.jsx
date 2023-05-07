import React from 'react'
import logo from './../../assets/pluma.png'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../components/Alert'


const NewPassword = () => {

  const [validatedToken, setValidatedToken] = useState(false)
  const [alert, setAlert] = useState({})
  const [password, setPassword] = useState('')
  const [modifiedPassword, setModifiedPassword] = useState(false)

  const params = useParams()
  const { token } = params
  

  useEffect(() => {
    const checkingToken = async () => {
      try {
        // TODO: Mover hacia un cliente axios
        await axios(`${import.meta.env.VITE_BACKEND_URL}/users/forgot-password/${token}`)
        setValidatedToken(true)
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
        return
        
      }
    }
    checkingToken()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6) {
      setAlert({
        msg: 'La contraseña tiene que tener mínimo 6 caracteres',
        error: true        
      })
      return
    }

    try{
      const { data } = await axios.post (`${import.meta.env.VITE_BACKEND_URL}/users/forgot-password/${token}`, { password })
      setAlert({
        msg: data.msg,
        error:false
      })
      setModifiedPassword(true)
    } catch (error){
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
      <h1 className="text-gray-500 text-3xl font-bold tracking-wide text-center">
        SHELFIE <br></br><br></br>
        <span className="text-slate-400">Restablece tu contraseña para acceder de nuevo a tu librería</span>
      </h1>

      {msg && <Alert alert = { alert } />}

      { validatedToken && (
        <form 
          className="my-10 bg-slate-700 shadow rounded-lg px-10 py-5"
          onSubmit={handleSubmit}
        >
        
        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="password"
          >
            Nueva Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu nueva contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 border-slate-500 outline-sky-200 text-white placeholder:text-slate-200"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>


        <input
          type="submit"
          value="Guardar nueva contraseña"
          className="w-full py-2 bg-sky-700 rounded text-center uppercase text-white tracking-wide font-medium mt-5 cursor-pointer hover:bg-sky-900 transition-colors duration-300 ease-linear focus:outline-none"
        />
      </form>
      )}

      {modifiedPassword && (
        <Link
          to="/"
          className="block w-2/3 mx-auto py-2 border rounded-xl text-center uppercase text-cyan-400 tracking-wide font-medium cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-colors duration-300 ease-linear focus:outline-none"
        >
          Inicia sesión
        </Link>
      ) }
    </>
  )
}

export default NewPassword
