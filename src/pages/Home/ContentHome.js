import React from 'react'
import './index.css'
import Login from './Login'
import { infoCompanyData } from '../../data_test/company_info'

export const ContentHome = () => {
  const { logo, company_name_info } = infoCompanyData
  const HeadLogin = () => (
    <div className="absolute">
      <img src={logo} alt="logo" className="w-24" />
      <img src={company_name_info} alt="name-logo" className="w-24" />
    </div>
  )
  const ContentHomeMain = ({ children }) => (
    <>
      <div className="fixed w-full z-0 flex h-full mb-auto bg-center bg-cover banner">
        <div className="fixed z-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-40"></div>
      </div>
      <div className="flex items-center justify-center w-4/5 h-auto p-2 mx-auto my-auto">
        <div className="z-50 flex flex-col items-center justify-around w-5/6 py-6 xl:w-4/6 h-5/6 lg:flex-row">
          {children}
        </div>
      </div>
    </>
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
