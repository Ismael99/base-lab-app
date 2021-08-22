import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

export const InputSelect = ({
  name,
  isInterfaceView,
  id,
  value,
  module,
  placeholder,
  status
}) => {
  const selectDataSelector = createSelector((state) =>
    state[module].data ? state[module].data : []
  )
  const selectDataSelectorTest = createSelector((state) => {
    console.log(state)
    return state
  })

  const selectData = useSelector(selectDataSelector)
  const test = useSelector(selectDataSelectorTest)
  console.log(selectData)
  console.log(test)
  return (
    <Field
      name={name}
      as="select"
      disabled={isInterfaceView}
      className={`w-full p-1 px-2 pl-9 outline-none`}
    >
      <option value={0} key={0} defaultValue>
        {placeholder}
      </option>
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
