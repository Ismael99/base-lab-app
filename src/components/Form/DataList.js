import React from 'react'
import { useField } from 'formik'
import ReactHTMLDatalist from 'react-html-datalist'
var cars = [
  { value: 1, text: 'Honda' },
  { value: 2, text: 'Honda' },
  { value: 3, text: 'Maruti' },
  { value: 4, text: 'Honda' },
  { value: 5, text: 'Tesla' },
  { value: 6, text: 'Tesla' },
  { value: 7, text: 'Tesla' },
  { value: 8, text: 'Toyota' },
  { value: 9, text: 'Toyota' }
]
export const DataList = ({ datalistData, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <ReactHTMLDatalist
        {...field}
        {...props}
        options={cars}
        id="id"
        classNames={`w-full p-1 px-2 pl-9 outline-none`}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
