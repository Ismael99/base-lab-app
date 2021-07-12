import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Link } from '@reach/router'
import {
  HomeIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/outline'
import { useDropdown } from '../../hooks/useDropdown'

export const DashboardMenuItem = ({ title, path, links }) => {
  const [isDropdownOPen, onClickDropdown, openClasses] = useDropdown()

  return (
    <>
      <Link
        className={`flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-200 dark:hover:bg-blue-600 ${openClasses}`}
        to={path}
      >
        <Link to={path} className="flex flex-row hover:text-black">
          {/* Module icon*/}
          <span>
            {' '}
            <HomeIcon className="w-5 h-5" />{' '}
          </span>
          <span className="ml-2 text-sm">{title}</span>
        </Link>

        <span className="pl-1 ml-auto text-center" onClick={onClickDropdown}>
          {' '}
          {isDropdownOPen && (
            <ChevronDownIcon className="w-5 h-5 transform hover:scale-125 hover:text-black" />
          )}
          {!isDropdownOPen && (
            <ChevronRightIcon className="w-5 h-5 transform hover:scale-125 hover:text-black" />
          )}{' '}
        </span>
      </Link>
      {isDropdownOPen && (
        <div className="mt-2 space-y-2 px-7">
          {/*TODO hacer un manejo del estado de los items con un array, 
          useActive(itemIndex), entonces se actualizara el estado del 
          item en esa posicion
          */}
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-2 py-1 text-sm text-gray-500 border-b-2 border-transparent transform hover:bg-gray-100 hover:border-gray-200 hover:shadow-lg hover:scale-105 duration-300 ease-in-out transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

DashboardMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(object)
}
