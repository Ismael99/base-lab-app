import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { DataList } from './DataList'

export const InputDatalist = (props) => {
  const { module } = props
  const datalistSelector = createSelector((state) =>
    state[module].data ? state[module].data : []
  )
  const datalistData = useSelector(datalistSelector)
  console.log(datalistData)
  return (
    <>
      <DataList datalistData={datalistData} {...props} />
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
