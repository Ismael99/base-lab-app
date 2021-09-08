import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import Select from 'react-select'
import { useField } from 'formik'
import { concatLabel } from '../../utils/concatLabel'
export const CustomDataList = ({
  id,
  status,
  module,
  label,
  name,
  value,
  placeholder,
  isInterfaceView,
  onChangeDatalist,
  isMulti = false,
  valueDatalist,
  extraValue = undefined,
  errorDatalist = undefined,
  ...props
}) => {
  const [field, meta, helper] = useField({ ...props, name })
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ?? []
    const dataFilter = status
      ? data.map((register) => {
          const label_concat = concatLabel(value, register)
          if (register[status] !== 2) {
            if (extraValue) {
              return {
                label: label_concat,
                value: register[id],
                [extraValue]: register[extraValue]
              }
            }
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
  return (
    <div className="w-full">
      <Select
        {...field}
        onChange={onChangeDatalist}
        value={valueDatalist}
        options={dataListData}
        name={name}
        closeMenuOnSelect={!isMulti}
        isDisabled={isInterfaceView}
        onFocus={() => helper.setTouched(true)}
        isMulti={isMulti}
        placeholder={placeholder}
      />
      <div className="absolute py-4 mb-10 text-xs text-red-500">
        <p>
          {errorDatalist.examenes_realizados && meta.touched
            ? errorDatalist.examenes_realizados
            : ''}
        </p>
      </div>
    </div>
  )
}
//Los errores no se manejan normalmente, se debe hacer manual ya que la libreria reac-select no
//posee el prop de touch, lo hago manualmemte en el vento onFocus y mostrando el error en este mismo
//compnente, a diferencia de los demas inputs, el error se muestra en Input.js
