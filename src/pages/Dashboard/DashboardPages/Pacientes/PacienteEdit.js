import React from 'react'
import { PacientesForm } from './PacientesForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const pacientesSelector = createSelector(
  (state) => (state.pacientes.data ? state.pacientes.data : []),
  (data) => data.filter((paciente) => paciente.paciente_status !== 2)
)

export const PacienteEdit = ({ id, ...props }) => {
  const pacientes = useSelector(pacientesSelector)
  return (
    <PacientesForm
      pacientes={pacientes}
      id={id}
      isInterfaceView={false}
      {...props}
    />
  )
}
