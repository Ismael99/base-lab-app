import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

export const InputSelect = ({
  name,
  type,
  isInterfaceView,
  id,
  value,
  module
}) => {
  const selectDataSelector = createSelector((state) =>
    state[module].data ? state[module].data : []
  )
  const selectData = useSelector(selectDataSelector)
  console.log(selectData)
  return (
    <Field
      name={name}
      as={type}
      disabled={isInterfaceView}
      className={`w-full p-1 px-2 pl-9 outline-none`}
    >
      {selectData.map((option) => (
        <option key={option[id]} value={option[id]}>
          {option[value]}
        </option>
      ))}
    </Field>
  )
}

InputSelect.propTypes = {
  type: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
