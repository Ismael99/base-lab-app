import React from 'react'
import './index.css'
import Login from './Login'

export const ContentHome = () => {
  const ContentHomeMain = ({ children }) => (
    <div className="w-full h-full mb-auto bg-center bg-cover h-128 banner ">
      <div className="flex justify-center items-center h-full bg-gray-900 bg-opacity-50 ">
        <div className="flex flex-col justify-around items-center w-5/6 xl:w-4/6 py-6 h-5/6 lg:flex-row">
          {children}
        </div>
      </div>
    </div>
  )

  return (
    <ContentHomeMain>
      <div>
        <h2 className="text-4xl font-semibold text-gray-100">Brand</h2>

        <h3 className="text-2xl font-semibold text-gray-100">
          Hello <span className="text-indigo-400">Guest</span>
        </h3>

        <p className="mt-3 text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
      <Login />
    </ContentHomeMain>
  )
}
