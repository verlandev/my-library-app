import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../components/Alert'

const ConfirmAccount = () => {

  const [alert, setAlert] = useState({})

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
    <div>
      {msg && <Alert alert={alert} />}
    </div>
    </>
  )
}

export default ConfirmAccount

