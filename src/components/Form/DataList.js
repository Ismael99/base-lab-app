import React, { useEffect } from 'react'
import { useField, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import Select from 'react-select'
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    paddingLeft: '25px'
  })
}
export const DataList = ({
  datalistData,
  id,
  status,
  module,
  label,
  name,
  value,
  placeholder,
  ...props
}) => {
  const [field, meta, helper] = useField({ ...props, name })
  const { onBlur } = field
  const { setValue, setTouched } = helper
  console.log(field.value)
  console.log(helper)
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ?? []
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
        onFocus={() => setTouched(true)}
        styles={colourStyles}
        placeholder={placeholder}
      />
      <div className="absolute py-4 mb-10 text-xs text-red-500">
        <ErrorMessage name={name} render={(msg) => <p>{msg.value}</p>} />
      </div>
    </div>
  )
}
//Los errores no se manejan normalmente, se debe hacer manual ya que la libreria reac-select no
//posee el prop de touch, lo hago manualmemte en el vento onFocus y mostrando el error en este mismo
//compnente, a diferencia de los demas inputs, el error se muestra en Input.js
