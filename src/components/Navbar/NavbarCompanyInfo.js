import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarCompanyInfo = ({ logo, company_name_img }) => (
  <Link
    className="text-sm font-bold  inline-flex mr-4 py-2 whitespace-nowrap uppercase text-gray-800"
    to="/"
  >
    <img src={logo} className="w-8 mx-3" alt="logo" />
    <img src={company_name_img} className="w-24 mx-3" alt="logo" />
  </Link>
)

NavbarCompanyInfo.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.isRequired
}
