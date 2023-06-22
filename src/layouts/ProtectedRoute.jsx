import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'

const ProtectedRoute = () => {

    const { auth, loading } = useAuth()

    if(loading) return 'cargando...'

  return (
    <>
      { auth._id ?  
      (
        <div>
            <Header/>

            <div>
                <main>
                  <Outlet />
                </main>
            </div>
        </div>
      ): <Navigate to ='/' /> }
    </>
  )
}

export default ProtectedRoute
