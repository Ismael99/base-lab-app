import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
export const InputTotalPrecio = ({ name, placeholder, valueExtraInput }) => {
  return (
    <Field
      value={valueExtraInput}
      disabled={true}
      name={name}
      placeholder={placeholder}
      type="number"
      className={`w-full p-1 px-2 pl-9 outline-none appearance-none`}
    />
  )
}

InputTotalPrecio.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired
}
