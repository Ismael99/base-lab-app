import React from 'react'
import { Table } from '../../../../components/Table'
import { PacienteSchema } from '../../../../schema'

export const PacientesHome = ({ pacientes }) => {
  return (
    <>
      <Table
        headers={PacienteSchema.tableHeaders}
        data={pacientes}
        keys={PacienteSchema.keys}
        idKey="paciente_id"
      />
    </>
  )
}
