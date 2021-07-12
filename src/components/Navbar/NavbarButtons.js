import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarButtons = ({ navbarOpen, LoginIcon }) => (
  <div
    className={
      'lg:flex flex-grow pb-1 items-center justify-center' +
      (navbarOpen ? ' flex' : ' hidden')
    }
    id="example-navbar-danger"
  >
    <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
      <li className="nav-item">
        <Link
          className="flex justify-center border-b lg:border-0 border-gray-500 pb-0 transform hover:translate-x-px hover:-translate-y-px items-center px-3 text-xs font-bold leading-snug text-black lg:text-white uppercase hover:opacity-75"
          to="/"
        >
          <LoginIcon className="w-5" alt="login-logo" />{' '}
          <span className="ml-2">Registrarse</span>
        </Link>
      </li>
    </ul>
  </div>
)
NavbarButtons.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired
}
