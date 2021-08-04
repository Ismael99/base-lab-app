import React from 'react'
import { PacientesForm } from './PacientesForm'

export const PacienteNew = (props) => {
  return <PacientesForm {...props} isInterfaceView={false} />
}
