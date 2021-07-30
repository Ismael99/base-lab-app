import React from 'react'
import { PacientesForm } from './PacientesForm'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const pacientesSelector = createSelector(
  (state) => state.pacientes.data,
  (data) => data.filter((paciente) => paciente.paciente_status !== 2)
)
export const PacienteDetail = ({ id }) => {
  const pacientes = useSelector(pacientesSelector)
  console.log(pacientes)
  const PacienteToView = pacientes.find((paciente) => {
    return paciente.paciente_id.toString() === id
  })
  return <PacientesForm paciente={PacienteToView} isInterfaceView={true} />
}
