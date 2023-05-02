import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../components/Alert'

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
    <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
    <span className="text-slate-700 uppercase">Es hora de confirmar tu cuenta<br></br></span> 
    Si quieres aprovechar Shelfie al máximo. Haz click en el siguiente botón para confirmar tu cuenta y empieza a crear y organizar tu librería personal.
    </h1>
    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
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

