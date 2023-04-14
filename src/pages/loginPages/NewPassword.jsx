import React from 'react'

const NewPassword = () => {
  return (
    <>
      <h1 className="text-gray-600 text-3xl font-bold tracking-wide text-center">
        Restablece tu contraseña y no pierdas acceso a tu {""}
        <span className="text-slate-700">librería</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
        
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold tracking-wide"
            htmlFor="password"
          >
            Nueva Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu nueva contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 outline-sky-200"
          />
        </div>


        <input
          id="submit"
          value="Guardar nueva contraseña"
          className="w-full py-2 bg-sky-700 rounded text-center uppercase text-white tracking-wide font-medium mt-5 cursor-pointer hover:bg-sky-900 transition-colors duration-300 ease-linear focus:outline-none"
        />
      </form>
    </>
  )
}

export default NewPassword
