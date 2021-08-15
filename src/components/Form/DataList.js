import React from 'react'
import { useField } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import Select from 'react-select'
export const DataList = ({
  datalistData,
  id,
  value,
  status,
  module,
  label,
  ...props
}) => {
  const [field, helper] = useField(props)
  const { onBlur } = field
  const { setValue } = helper
  console.log(field.value)
  console.log(helper)
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ? state[module].data : []
    console.log(data)
    const dataFilter = data.map((register) => {
      if (register[status] !== 2) {
        return { label: register[value], value: register[id] }
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
        {...field}
        {...props}
        options={dataListData}
        id="id"
        onChange={setValue}
        onBlur={onBlur}
        defaultValue={valueDefault || { value: 0, label: label }}
      />
    </div>
  )
}
