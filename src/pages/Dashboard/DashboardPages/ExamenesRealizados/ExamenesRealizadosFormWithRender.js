import React from 'react'
import { FormWithRender } from '../../../../components/Form/FormWithRender'
import { ExamenRealizadoSchema } from '../../../../schema'
import { setCurrentExamenRealizado } from '../../../../redux/actions/examenesRealizadosActions'

export const ExamenesRealizadosFormWithRender = ({
  examenesRealizados,
  id,
  isInterfaceView,
  redirectToBack,
  ...props
}) => {
  let examenRealizadoCurrent = examenesRealizados?.find((examen_realizado) => {
    return examen_realizado.examen_realizado_id.toString() === id
  })
  return (
    <FormWithRender
      isInterfaceView={isInterfaceView}
      initialValues={examenRealizadoCurrent}
      schema={ExamenRealizadoSchema}
      setCurrent={setCurrentExamenRealizado}
      currentPath="examenes_realizados"
      {...props}
    />
  )
}
