import React, { useEffect } from 'react'
import { useField, ErrorMessage } from 'formik'
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
  value,
  ...props
}) => {
  const [field, meta, helper] = useField({ ...props, name })
  const { onBlur } = field
  const { setValue } = helper
  console.log(field.value)
  console.log(helper)
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ? state[module].data : []
    console.log(data)
    const dataFilter = status
      ? data.map((register) => {
          if (register[status] !== 2) {
            return { label: register[value], value: register[id] }
          }
          return undefined
        })
      : data.map((register) => {
          return { label: register[value], value: register[id] }
        })
    return dataFilter
  })
  const dataListData = useSelector(dataListSelector)
  console.log({ field })
  console.log({ meta })
  useEffect(() => {
    const valueDefault = dataListData.find((option) => {
      return option.value === field.value
    })
    setValue(valueDefault)
    debugger
  }, [])
  return (
    <div className="w-full">
      <Select
        {...field}
        onChange={setValue}
        onBlur={onBlur}
        options={dataListData}
        name={name}
      />
      <ErrorMessage name={name} />
    </div>
  )
}
