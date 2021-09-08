import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
export const InputText = ({
  name,
  placeholder,
  type = 'text',
  isInterfaceView,
  disabled
}) => {
  return (
    <Field
      disabled={disabled ?? isInterfaceView}
      name={name}
      placeholder={placeholder}
      type={type}
      className={`w-full p-1 px-2 pl-9 outline-none appearance-none`}
    />
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired
}
