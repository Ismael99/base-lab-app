import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
export const InputText = ({
  name,
  placeholder,
  type = 'text',
  isInterfaceView
}) => {
  return (
    <Field
      name={name}
      placeholder={placeholder}
      type={type}
      className={`w-full p-1 px-2 pl-9 outline-none appearance-none`}
      disabled={isInterfaceView}
    />
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired
}
