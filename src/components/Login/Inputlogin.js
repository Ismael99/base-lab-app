import React from 'react'
import { ErrorMessage, Field } from 'formik'
export const InputLogin = ({
  IconField,
  loading,
  type,
  nameField,
  placeholder
}) => {
  return (
    <>
      <span className="flex flex-row items-center ">
        <IconField className="absolute w-6 ml-2 text-gray-400" />
        <Field
          className="block w-full px-4 py-2 pl-10 text-white placeholder-white bg-white border border-gray-800 rounded-full focus:border-white bg-opacity-10 border-opacity-50 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
          type={type}
          name={nameField}
          placeholder={placeholder}
          disabled={loading}
        />
      </span>
      <div className="w-3/4 h-6 mt-3 mb-3 text-xs text-left text-red-500 xl:w-1/2">
        <ErrorMessage name={nameField} />
      </div>
    </>
  )
}
