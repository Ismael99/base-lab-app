import React from 'react'
import { Form } from '../../../../components/Form'
import { PacienteSchema } from '../../../../schema'
import { setCurrentPaciente } from '../../../../redux/actions/pacientesAction'

export const PacientesForm = ({ pacientes, id, isInterfaceView, ...props }) => {
  const pacienteCurrent = pacientes?.find((paciente) => {
    return paciente.paciente_id.toString() === id
  })
  console.log(pacientes, id)
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={pacienteCurrent}
      schema={PacienteSchema}
      setCurrent={setCurrentPaciente}
      currentPath="pacientes"
      {...props}
    />
  )
}
