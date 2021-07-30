import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

export const InputRadio = ({ name, type, isInterfaceView, options }) => {
  return (
    <div className="flex flex-row w-full p-1 pl-9 outline-none">
      {options.map((option) => (
        <div className="mr-4">
          <Field
            type={type}
            name={name}
            value={option.value}
            disabled={isInterfaceView}
            className="mr-1"
          />
          <label>{option.text}</label>
        </div>
      ))}
    </div>
  )
}

InputRadio.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}
