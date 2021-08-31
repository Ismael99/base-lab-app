import React, { useState } from 'react'
import { Form } from '../../../../components/Form'
import { OrdenExamenSchema } from '../../../../schema'
import { setCurrentOrdenExamen } from '../../../../redux/actions/ordenesExamenesActions'

export const OrdenesExamenesForm = ({
  ordenesExamenes,
  id,
  isInterfaceView,
  ...props
}) => {
  const [stateForm, setStateForm] = useState([])
  const onChangeDatalist = (e) => {
    setStateForm(e)
    console.log(stateForm)
  }
  const customOnSubmit = () => {}
  let ordenExamenCurrent = ordenesExamenes?.find((orden_examen) => {
    return orden_examen.orden_exam_id.toString() === id
  })
  return (
    <Form
      valueDatalist={stateForm}
      onChangeDatalist={onChangeDatalist}
      isInterfaceView={isInterfaceView}
      initialValues={ordenExamenCurrent}
      schema={OrdenExamenSchema}
      setCurrent={setCurrentOrdenExamen}
      currentPath="ordenes_examenes"
      {...props}
    />
  )
}
