import React, { useState } from 'react'
import { NavbarCompanyInfo } from './NavbarCompanyInfo'
import { NavbarButtons } from './NavbarButtons'
import { LoginIcon, MenuIcon } from '@heroicons/react/outline'

export const Navbar = ({ logo, companyName, company_name_img }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const NavbarMain = ({ children }) => (
    <nav className="relative bg-gradient-to-r from-gray-200 to-black flex flex-wrap items-center justify-between px-4">
      {children}
    </nav>
  )
  const NavbarCompany = ({ children }) => (
    <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
      {children}
    </div>
  )
  return (
    <NavbarMain>
      <NavbarCompany>
        <NavbarCompanyInfo logo={logo} company_name_img={company_name_img} />
        <button
          className="block w-12 px-3 text-xl text-white hover:scale-110 hover:opacity-60 transform leading-none text-black bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <MenuIcon />
        </button>
      </NavbarCompany>
      <NavbarButtons navbarOpen={navbarOpen} LoginIcon={LoginIcon} />
    </NavbarMain>
  )
}
