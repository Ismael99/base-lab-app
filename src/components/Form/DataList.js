import React from 'react'
import { useField } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import Select from 'react-select'
export const DataList = ({
  datalistData,
  id,
  status,
  module,
  label,
  name,
  ...props
}) => {
  const [field, _, helper] = useField({ ...props, name })
  const { onBlur } = field
  const { setValue } = helper
  console.log(field.value)
  console.log(helper)
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ? state[module].data : []
    console.log(data)
    const dataFilter = data.map((register) => {
      if (register[status] !== 2) {
        return { label: register[props.value], value: register[id] }
      }
      return undefined
    })
    return dataFilter
  })
  const dataListData = useSelector(dataListSelector)
  const valueDefault = dataListData.find((option) => {
    return option.value === field.value
  })
  return (
    <div className="w-full">
      <Select
        onChange={setValue}
        defaultValue={valueDefault || { value: 0, label: 'Default' }}
        onBlur={onBlur}
        options={dataListData}
      />
    </div>
  )
}
