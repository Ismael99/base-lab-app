import { Link } from '@reach/router'
import React from 'react'
import { SaveIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import './index.css'

export const FormButtons = ({ moduleName, isInterfaceView }) => {
  const params = new URLSearchParams(window.location.search)
  const backPath = params.get('path')

  return (
    <div className="w-full mt-4">
      <div className="flex flex-col items-center justify-center w-1/2 mx-auto lg:flex-row">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          {!isInterfaceView && (
            <button
              type="submit"
              className="btn-animations w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-blue-600 bg-transparent border border-blue-400 rounded-lg hover:bg-opacity-40 md:text-base lg:text-lg focus:outline-none lg:w-3/4  transform hover:scale-105"
            >
              <span className="flex flex-row justify-center">
                <SaveIcon className="w-5 mr-2" /> Guardar
              </span>
            </button>
          )}
        </div>
        <Link
          to={backPath ? `/dashboard/${backPath}` : `/dashboard/${moduleName}`}
          className="flex items-center justify-center w-full lg:w-1/2"
        >
          <button
            type="button"
            className="w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-red-600 border border-red-400 rounded-lg btn-animations md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-40 transform hover:scale-105"
          >
            <span className="flex flex-row justify-center">
              <ChevronLeftIcon className="w-5 mr-2" /> Atras
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
