import React from 'react'
import { Form } from '../../../../components/Form'
import { PacienteSchema } from '../../../../schema'
import { setCurrentPaciente } from '../../../../redux/actions/pacientesAction'

export const PacientesForm = ({ pacientes, id, isInterfaceView, ...props }) => {
  let pacienteCurrent = pacientes?.find((paciente) => {
    return paciente.paciente_id.toString() === id
  })
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
