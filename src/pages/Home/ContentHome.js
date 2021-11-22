import React from 'react'
import './index.css'
import { Login } from '../../components/Login'
import { infoCompanyData } from '../../data_test/company_info'

export const ContentHome = () => {
  const { logo, company_name_img } = infoCompanyData
  const HeadLogin = () => (
    <div className="z-40 flex flex-col justify-center items-start lg:absolute w-full">
      <div className="flex flex-col items-center justify-center px-5 py-5 bg-white rounded-br-lg bg-opacity-10">
        <img src={logo} alt="logo" className="w-8 md:w-16" />
        <img src={company_name_img} alt="name-logo" className="w-16 md:w-32" />
      </div>
    </div>
  )
  const ContentHomeMain = ({ children }) => (
    <>
      <HeadLogin />
      <div className="fixed z-0 flex w-full h-full mb-auto bg-center bg-cover banner">
        <div className="fixed z-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-30"></div>
      </div>
      <div className="flex items-center justify-center w-full h-auto p-2 mx-auto my-auto xl:w-5/6">
        <div className="z-50 flex flex-col items-center justify-around w-11/12 py-6 xl:w-4/6 h-5/6 lg:flex-row">
          {children}
        </div>
      </div>
    </>
  )

  return (
    <ContentHomeMain>
      <div className="order-2 lg:order-1">
        <h2 className="text-4xl font-semibold text-gray-100">Bienvenido</h2>

        <h3 className="text-2xl font-semibold text-gray-100">
          <span className="text-indigo-400">de nuevo!</span>
        </h3>
      </div>
      <Login />
    </ContentHomeMain>
  )
}
