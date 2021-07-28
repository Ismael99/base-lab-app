import React from 'react'
import { Form } from '../../../../components/Form'
import { PacienteSchema } from '../../../../schema'
import { setCurrentPaciente } from '../../../../redux/actions/pacientesAction'

export const PacientesForm = ({ paciente, isInterfaceView, ...props }) => {
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={paciente}
      schema={PacienteSchema}
      setCurrent={setCurrentPaciente}
      currentPath="pacientes"
      {...props}
    />
  )
}
