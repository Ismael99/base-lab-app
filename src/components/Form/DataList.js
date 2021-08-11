import React from 'react'
import { useField } from 'formik'
import ReactHTMLDatalist from 'react-html-datalist'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

export const DataList = ({
  datalistData,
  id,
  value,
  status,
  module,
  ...props
}) => {
  const [field, meta] = useField(props)
  const dataListSelector = createSelector((state) => {
    const data = state[module].data ? state[module].data : []
    console.log(data)
    const dataFilter = data.map((register) => {
      if (register[status] !== 2) {
        return { text: register[value], value: register[id] }
      }
      return undefined
    })
    return dataFilter
  })
  const dataListData = useSelector(dataListSelector)
  console.log(dataListData)
  return (
    <>
      <ReactHTMLDatalist
        {...field}
        {...props}
        disabled
        options={dataListData}
        id="id"
        classNames={`w-full p-1 px-2 pl-9 outline-none`}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
