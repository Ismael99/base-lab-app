import React from 'react'
import { Form as Formk, Formik } from 'formik'
import { FormButtons } from './FormButtons'
import { Input } from './Input'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { datalistTransform } from '../../utils/DatalistTransformValues'
export const Form = ({
  initialValues,
  schema,
  toDispatch,
  setCurrent,
  isInterfaceView,
  currentPath,
  valueDatalist = undefined,
  onChangeDatalist = undefined,
  customOnSubmit = undefined
}) => {
  const onSubmit = (values, { setSubmitting }) => {
    values = datalistTransform(values)
    dispatch(setCurrent(values))
    dispatch(toDispatch)
    setSubmitting(false)
    console.log('Submiting...')
    console.log(values)
    navigate(`/dashboard/${currentPath}`, { replace: true })
  }
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={
        initialValues !== undefined ? initialValues : schema.initialValues
      }
      validationSchema={schema.validations}
      onSubmit={customOnSubmit || onSubmit}
      className="flex flex-col justify-center min-h-screen px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
    >
      <Formk className="flex flex-col pt-3 md:pt-2">
        {schema.fields.map((field, key) => (
          <Input
            {...field}
            key={key}
            valueDatalist={valueDatalist}
            onChangeDatalist={onChangeDatalist}
            isInterfaceView={isInterfaceView}
          />
        ))}
        <FormButtons
          moduleName={currentPath}
          isInterfaceView={isInterfaceView}
        />
      </Formk>
    </Formik>
  )
}
