import React from 'react'
import './index.css'
import Login from './Login'
import { infoCompanyData } from '../../data_test/company_info'

export const ContentHome = () => {
  const { logo, company_name_img } = infoCompanyData
  const HeadLogin = () => (
    <div className="z-40 flex flex-col justify-center items-start lg:absolute w-full">
      <div className="px-5 py-5 bg-white bg-opacity-20 rounded-br-lg flex justify-center items-center flex-col">
        <img src={logo} alt="logo" className="md:w-16 w-8" />
        <img src={company_name_img} alt="name-logo" className="md:w-32 w-16" />
      </div>
    </div>
  )
  const ContentHomeMain = ({ children }) => (
    <>
      <HeadLogin />
      <div className="fixed w-full z-0 flex h-full mb-auto bg-center bg-cover banner">
        <div className="fixed z-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-30"></div>
      </div>
      <div className="flex items-center justify-center xl:w-5/6 w-full h-auto p-2 mx-auto my-auto">
        <div className="z-50 flex flex-col items-center justify-around w-11/12 py-6 xl:w-4/6 h-5/6 lg:flex-row">
          {children}
        </div>
      </div>
    </>
  )

  return (
    <ContentHomeMain>
      <div className="lg:order-1 order-2">
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
