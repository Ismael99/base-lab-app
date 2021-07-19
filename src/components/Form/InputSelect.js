import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
export const InputSelect = ({
  name,
  type,
  placeholder,
  isInterfaceView,
  classDisabled,
  options,
  id,
  value
}) => {
  console.log(options[0][id])
  return (
    <Field
      name={name}
      placeholder={placeholder}
      as={type}
      disabled={isInterfaceView}
      className={`w-full p-1 px-2 pl-9 outline-none appearance-none ${classDisabled}`}
    >
      {options.map((option) => (
        <option key={option[id]} value={option[id]}>
          {option[value]}
        </option>
      ))}
    </Field>
  )
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired,
  classDisabled: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
