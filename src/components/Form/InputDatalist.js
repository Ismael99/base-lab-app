import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

export const InputDatalist = ({
  name,
  type,
  isInterfaceView,
  id,
  value,
  module
}) => {
  const datalistSelector = createSelector((state) =>
    state[module].data ? state[module].data : []
  )
  const datalistData = useSelector(datalistSelector)
  console.log(datalistData)
  return (
    <>
      <Field
        className="flex flex-row w-full p-1 outline-none pl-9"
        name={name}
        disabled={isInterfaceView}
        type="text"
        list="data"
      />
      <datalist id="data">
        {datalistData &&
          datalistData.map((option_data, key) => (
            <option
              data-value={option_data[id]}
              key={key}
              value={option_data[value]}
            >
              {option_data[value]}
            </option>
          ))}
      </datalist>
    </>
  )
}

InputDatalist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired,
  module: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
