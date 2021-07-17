import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'
import { InformationCircleIcon } from '@heroicons/react/outline'

export const Input = ({ label, placeholder, type, name, icon }) => {
  const Icon = icon ? icon : InformationCircleIcon

  return (
    <div className="w-full">
      <div className="w-3/4 h-6 mx-auto mt-3 text-xs font-bold text-gray-600 uppercase xl:w-1/2 leading-8">
        <span className="mr-1 text-red-400">*</span> {label}
      </div>
      <div className="flex w-3/4 p-1 mx-auto my-2 bg-white border border-gray-200 rounded xl:w-1/2">
        <span className="flex flex-row items-center justify-start">
          <Icon className="absolute w-5 ml-1" />
          <Field
            name={name}
            placeholder={placeholder}
            type={type}
            className="w-full p-1 px-2 pl-9 text-gray-800 outline-none appearance-none"
          />
        </span>
      </div>
      <div className="w-3/4 h-6 mx-auto mt-3 text-xs text-red-500 xl:w-1/2">
        <ErrorMessage name={name} />
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
