import React from 'react'
import { ErrorMessage } from 'formik'
import { InputText } from './InputText'
import { InputSelect } from './InputSelect'
import { InputRadio } from './InputRadio'
import { InformationCircleIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const { label, icon, type, name } = props
  const Icon = icon ? icon : InformationCircleIcon
  const InputRendered = (type) => {
    switch (type) {
      case 'select':
        return InputSelect
      case 'text':
        return InputText
      case 'radio':
        return InputRadio
      default:
        return InputText
    }
  }
  const InputRender = InputRendered(type)
  return (
    <div className="w-full">
      <div className="w-3/4 h-6 mx-auto mt-3 text-xs font-bold text-gray-600 uppercase xl:w-1/2 leading-8">
        <span className="mr-1 text-red-400">*</span> {label}
      </div>
      <div
        className={`flex  w-3/4 xl:w-1/2 p-1 mx-auto my-2 border border-gray-200 rounded`}
      >
        <span className="flex flex-row items-center justify-start w-full">
          <Icon className="absolute w-5 ml-1" />
          <InputRender {...props} />
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
