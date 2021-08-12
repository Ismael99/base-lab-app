import React from 'react'
import { Form } from '../../../../components/Form'
import { QuimicoSchema } from '../../../../schema'
import { setCurrentQuimico } from '../../../../redux/actions/quimicosAction'

export const QuimicosForm = ({ quimicos, id, isInterfaceView, ...props }) => {
  const quimicoCurrent = quimicos?.find((quimico) => {
    return quimico.quimico_id.toString() === id
  })
console.log(quimicoCurrent)
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={quimicoCurrent}
      schema={QuimicoSchema}
      setCurrent={setCurrentQuimico}
      currentPath="quimicos"
      {...props}
    />
  )
}
