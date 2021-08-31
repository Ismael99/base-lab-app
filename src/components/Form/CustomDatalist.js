import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import Select from 'react-select'
export const CustomDataList = ({
  id,
  status,
  module,
  label,
  name,
  value,
  placeholder,
  onChangeDatalist,
  isMulti = false,
  valueDatalist,
  ...props
}) => {
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ?? []
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
  useEffect(() => {}, [])
  return (
    <div className="w-full">
      <Select
        onChange={onChangeDatalist}
        value={valueDatalist[name]}
        options={dataListData}
        name={name}
        isMulti={isMulti}
        placeholder={placeholder}
      />
      <div className="absolute py-4 mb-10 text-xs text-red-500">
        <p>Error</p>
      </div>
    </div>
  )
}
//Los errores no se manejan normalmente, se debe hacer manual ya que la libreria reac-select no
//posee el prop de touch, lo hago manualmemte en el vento onFocus y mostrando el error en este mismo
//compnente, a diferencia de los demas inputs, el error se muestra en Input.js
