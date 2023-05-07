import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {

    const { auth } = useAuth()

    console.log(auth)

  return (
    <>
      { auth._id ? 'Autenticado' : <Navigate to ='/' /> }
    </>
  )
}

export default ProtectedRoute
