import React from 'react'
import { useIsOpen } from '../../hooks/useIsOpen'
// import { useIsActiveClasses } from '../../hooks/useIsActiveClasses'
import user_icon from '../../assets/user_icon.png'
import { Transition } from '@headlessui/react'
import { navigate, useLocation } from '@reach/router'

const logout = (e) => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  navigate('/')
  window.location.reload()
}

export const Avatar = ({ setPath }) => {
  // const avatarMenuClasses = ['absolute hidden right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none', 'absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none transform transition ease-out delay-150 duration-300']

  // const [classes] = useIsActiveClasses(avatarMenuClasses)
  const [isMenuOpen, handleIsMenuOpen] = useIsOpen(false)
  const location = useLocation()

  return (
    <div className="relative ml-auto flex items-center">
      <button
        className="rounded-full transition-opacity duration-200 dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
        onClick={handleIsMenuOpen}
      >
        <span className="sr-only">User menu</span>
        <img className="w-8 h-10" src={user_icon} alt="Ahmed Kamel" />
      </button>
      {/*Avatar menu dropdown*/}
      <Transition
        show={isMenuOpen}
        enter="transition-all transform ease-out"
        enterFrom="translate-y-1/2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all transform ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-1/2 opacity-0"
        className="absolute right-0 w-48 py-1 bg-white shadow-lg rounded-md top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
      >
        <span
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 cursor-default transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
          onClick={(e) => {
            const path = location.pathname
            setPath(path)
            navigate('/dashboard/me')
          }}
        >
          Your Profile
        </span>
        <span
          onClick={logout}
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 cursor-default transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
        >
          Logout
        </span>
      </Transition>
    </div>
  )
}
