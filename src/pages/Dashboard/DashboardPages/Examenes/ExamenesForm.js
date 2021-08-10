import React from 'react'
import { Form } from '../../../../components/Form'
import { ExamenSchema } from '../../../../schema'
import { setCurrentExamen } from '../../../../redux/actions/examenesAction'

export const ExamenesForm = ({ examenes, id, isInterfaceView, ...props }) => {
  const examenCurrent = examenes?.find((examen) => {
    return examen.examen_id.toString() === id
  })
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
