import React from 'react'
import { useField } from 'formik'

export const DataList = ({ datalistData, id, value, ...props }) => {
  const [field, meta, helpers] = useField(props)
  return (
    <>
      <input {...field} {...props} type="text" list="data" />
      <datalist id="data">
        {datalistData &&
          datalistData.map((option_data, key) => (
            <option
              key={key}
              value={option_data[id]}
              data-value={option_data[id]}
            >
              {option_data[value]}
            </option>
          ))}
      </datalist>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
