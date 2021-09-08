import React from 'react'
import { PacientesForm } from './PacientesForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const pacientesSelector = createSelector((state) =>
  state.pacientes.data ? state.pacientes.data : []
)
export const PacienteDetail = ({ id }) => {
  const pacientes = useSelector(pacientesSelector)
  return <PacientesForm pacientes={pacientes} id={id} isInterfaceView={true} />
}
