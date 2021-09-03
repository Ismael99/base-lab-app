import React from 'react'
import { Form } from '../../../../components/Form'
import { ExamenSchema } from '../../../../schema'
import { setCurrentExamenRealizado } from '../../../../redux/actions/examenesRealizadosActions'

export const ExamenesRealizadosForm = ({
  examenesRealizados,
  id,
  isInterfaceView,
  ...props
}) => {
  let examenRealizadoCurrent = examenesRealizados?.find((examen_realizado) => {
    return examen_realizado.examen_realizado_id.toString() === id
  })
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={examenRealizadoCurrent}
      schema={ExamenSchema}
      setCurrent={setCurrentExamenRealizado}
      currentPath="examenes_realizados"
      {...props}
    />
  )
}
