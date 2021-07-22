import React from 'react'
import { ErrorMessage } from 'formik'
import { InputText } from './InputText'
import { InputSelect } from './InputSelect'
import { InformationCircleIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const { isInterfaceView, label, icon, type, name } = props
  const Icon = icon ? icon : InformationCircleIcon
  return (
    <div className="w-full">
      <div className="w-3/4 h-6 mx-auto mt-3 text-xs font-bold text-gray-600 uppercase xl:w-1/2 leading-8">
        <span className="mr-1 text-red-400">*</span> {label}
      </div>
      <div
        className={`flex  w-3/4 xl:w-1/2 p-1 mx-auto my-2 border border-gray-200 rounded`}
      >
        <span className="flex w-full flex-row items-center justify-start">
          <Icon className="absolute w-5 ml-1" />
          {type === 'select' ? (
            <InputSelect {...props} />
          ) : (
            <InputText {...props} />
          )}
        </span>
      </div>
      <div className="w-3/4 h-6 mx-auto mt-3 text-xs text-red-500 xl:w-1/2">
        <ErrorMessage name={name} />
      </div>
    </div>
  )
}

Input.propTypes = {
  icon: PropTypes.func,
  label: PropTypes.string.isRequired
}
