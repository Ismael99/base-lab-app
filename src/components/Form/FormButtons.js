import { Link } from '@reach/router'
import React from 'react'
import { SaveIcon, ChevronLeftIcon } from '@heroicons/react/outline'

export const FormButtons = ({ moduleName, isInterfaceView }) => (
  <div className="w-full">
    <div className="flex flex-col items-center justify-center w-1/2 mx-auto lg:flex-row">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        {!isInterfaceView && (
          <button
            type="submit"
            className="hover:bg-blue-100 w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white text-blue-400 bg-transparent border border-blue-400 rounded-lg md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-90 transform hover:scale-105"
          >
            <span className="flex flex-row justify-center">
              <SaveIcon className="w-5 mr-2" /> Guardar
            </span>
          </button>
        )}
      </div>
      <Link
        to={`/dashboard/${moduleName}`}
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <button
          type="button"
          className="hover:bg-red-100 w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-transparent border text-red-400 border-red-400 rounded-lg md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-90 transform hover:scale-105"
        >
          <span className="flex flex-row justify-center">
            <ChevronLeftIcon className="w-5 mr-2" /> Atras
          </span>
        </button>
      </Link>
    </div>
  </div>
)
