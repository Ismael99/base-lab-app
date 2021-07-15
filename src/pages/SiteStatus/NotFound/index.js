import React from 'react'
import { Link } from '@reach/router'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/outline'
import './index.css'
export const NotFound = () => {
  return (
    <div id="main" className="flex flex-col justify-center items-center h-full">
      <div className="fof flex flex-col">
        <p className="text-xl text-center">Error 404</p>
        <h1 className="mt-3">Página no encontrada</h1>
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10 space-x-0">
        <Link
          to="../"
          className="bg-black px-3 py-1 text-white my-5 hover:opacity-80 transform hover:scale-105"
        >
          <span className="flex flex-row">
            <ArrowLeftIcon className="w-5 mr-2" /> Go Back
          </span>
        </Link>
        <Link
          to="/dashboard"
          className="bg-black text-white px-3 py-1 my-5 hover:opacity-80 transform hover:scale-105"
        >
          <span className="flex flex-row">
            <HomeIcon className="w-5 mr-2" /> Go Home
          </span>
        </Link>
      </div>
    </div>
  )
}
