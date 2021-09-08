import React, { useEffect } from 'react'
import { useField, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { concatLabel } from '../../utils/concatLabel'
import Select from 'react-select'
export const DataList = ({
  id,
  status,
  module,
  label,
  name,
  isInterfaceView = false,
  value,
  placeholder,
  isMulti = false,
  ...props
}) => {
  const [field, meta, helper] = useField({ ...props, name })
  const { setValue, setTouched } = helper
  console.log({ meta })
  console.log({ helper })
  console.log({ field })
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ?? []
    const dataFilter = status
      ? data.map((register) => {
          const label_concat = concatLabel(value, register)
          if (register[status] !== 2) {
            return { label: label_concat, value: register[id] }
          }
          return undefined
        })
      : data.map((register) => {
          return { label: register[value], value: register[id] }
        })
    return dataFilter
  })
  const dataListData = useSelector(dataListSelector)
  useEffect(() => {
    let valueDefault
    if (isMulti) {
      valueDefault = dataListData.filter((option) => {
        return field?.value?.find((field) => {
          console.log(field)
          return option.value === field.value
        })
      })
    } else {
      valueDefault = dataListData.find((option) => {
        return option.value === field.value
      })
    }
    setValue(valueDefault)
    debugger
  }, [])
  return (
    <div className="w-full">
      <Select
        {...field}
        isDisabled={isInterfaceView}
        onChange={setValue}
        options={dataListData}
        name={name}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        onFocus={() => setTouched(true)}
        placeholder={placeholder}
      />
      <div className="absolute py-4 mb-10 text-xs text-red-500">
        <p>
          {(meta.error?.value || meta.error) && meta.touched
            ? meta.error.value ?? meta.error
            : ''}
        </p>
      </div>
    </div>
  )
}
//Los errores no se manejan normalmente, se debe hacer manual ya que la libreria reac-select no
//posee el prop de touch, lo hago manualmemte en el vento onFocus y mostrando el error en este mismo
//compnente, a diferencia de los demas inputs, el error se muestra en Input.js
