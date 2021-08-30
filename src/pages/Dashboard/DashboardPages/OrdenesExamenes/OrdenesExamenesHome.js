import React from 'react'
import { Table } from '../../../../components/Table'
import { OrdenExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const ordenesExamenesSelector = createSelector(
  (state) => state.ordenes_examenes.data ?? [],
  (data) => data.filter((orden_examen) => orden_examen.orden_exam_status !== 2)
)
const pacientesSelector = createSelector((state) => state.pacientes.data ?? [])
export const OrdenesExamenesHome = () => {
  const pacientes = useSelector(pacientesSelector)
  console.log(pacientes)
  const ordenesExamenes = useSelector(ordenesExamenesSelector)
  const ordenesExamenesPacientesName = ordenesExamenes.map((ordenExamen) => {
    const currentPaciente = pacientes.find(
      (paciente) => ordenExamen.orden_exam_paciente === paciente.paciente_id
    )
    console.log({ currentPaciente })
    const paciente_full_name = `${currentPaciente.paciente_nombre} ${currentPaciente.paciente_apellido}`
    return {
      ...ordenExamen,
      orden_exam_paciente: paciente_full_name
    }
  })
  console.log(ordenesExamenes)
  return (
    <>
      <Table
        headers={OrdenExamenSchema.tableHeaders}
        data={ordenesExamenesPacientesName}
        keys={OrdenExamenSchema.keys}
        idKey="orden_exam_id"
      />
    </>
  )
}
