import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

export const InputSelect = ({
  name,
  type,
  placeholder,
  isInterfaceView,
  classDisabled,
  id,
  value,
  module
}) => {
  console.log(module)
  const selectDataSelector = createSelector((state) => state[module].data)
  const selectData = useSelector(selectDataSelector)
  return (
    <Field
      name={name}
      placeholder={placeholder}
      as={type}
      disabled={isInterfaceView}
      className={`w-full p-1 px-2 pl-9 outline-none ${classDisabled}`}
    >
      {selectData &&
        selectData.map((option) => (
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
