import React from 'react'
import { Table } from '../../../../components/Table'
import { PacienteSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const pacientesSelector = createSelector(
  (state) => (state.pacientes.data ? state.pacientes.data : []),
  (data) => data.filter((paciente) => paciente.paciente_status !== 2),
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.paciente_updated_at > b.paciente_updated_at) {
        return -1
      } else {
        return 1
      }
    })
)

export const PacientesHome = () => {
  const pacientes = useSelector(pacientesSelector)
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
