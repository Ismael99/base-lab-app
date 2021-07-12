import { Link } from '@reach/router'
import React from 'react'

export const Brand = ({ logo, company_name_img }) => (
  <Link
    to="/dashboard"
    className="inline-block text-2xl font-bold tracking-wider flex flex-row text-blue-700 uppercase dark:text-light"
  >
    <img src={logo} alt="logo" className="w-6 mx-3" />
    <img src={company_name_img} alt="logo-name" className="w-20 mx-3" />
  </Link>
)
