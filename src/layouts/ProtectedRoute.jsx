import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {

    const { auth, loading } = useAuth()

    if(loading) return 'cargando...'

  return (
    <>
      { auth._id ? <Outlet /> : <Navigate to ='/' /> }
    </>
  )
}

export default ProtectedRoute
