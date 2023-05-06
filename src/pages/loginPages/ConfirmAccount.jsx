import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../components/Alert'
import logo from './../../assets/pluma.png'


const ConfirmAccount = () => {

  const [alert, setAlert] = useState({})
  const [confirmedAccount, setConfirmedAccount] = useState(false)

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/users/confirm/${id}`
        const { data } = await axios(url)

        console.log(data.msg)

        setAlert({
          msg: data.msg,
          error: false
        })
        setConfirmedAccount(true)

      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmAccount();
  }, [])

  const { msg } = alert

  return (
    <>
    <img
        src={logo}
        className="invert w-1/5 mx-auto"
       />
    <h1 className="text-gray-500 text-3xl font-bold tracking-wide text-center">
    <span className="text-slate-400 uppercase">SHELFIE<br></br></span> 
    Confirma tu cuenta y comienza a gestionar tu librería.
    </h1>
    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-slate-700'>
      {msg && <Alert alert={alert} />}

      {confirmedAccount && (
        <Link
          to="/"
          className="block text-center text-slate-500 text-sm hover:text-slate-800 transition transition-duration-300 ease-lineal tracking-wide"
        >
          Inicia sesión
        </Link>
      ) }
    </div>
    </>
  )
}

export default ConfirmAccount

