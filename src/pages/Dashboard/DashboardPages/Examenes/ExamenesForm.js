import React from 'react'
import { Form } from '../../../../components/Form'
import { ExamenSchema } from '../../../../schema'
import { setCurrentExamen } from '../../../../redux/actions/examenesAction'

export const ExamenesForm = ({ examenes, id, isInterfaceView, ...props }) => {
  let examenCurrent = examenes?.find((examen) => {
    return examen.examen_id.toString() === id
  })
  examenCurrent = examenCurrent ?? ExamenSchema.initialValues
  console.log(examenCurrent)
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={examenCurrent}
      schema={ExamenSchema}
      setCurrent={setCurrentExamen}
      currentPath="examenes"
      {...props}
    />
  )
}
