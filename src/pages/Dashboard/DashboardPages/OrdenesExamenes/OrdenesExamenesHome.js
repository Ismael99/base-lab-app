import React, { useEffect, useState } from 'react'
import { Table } from '../../../../components/Table'
import { OrdenExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchExamenesRealizados } from '../../../../redux/actions/examenesRealizadosActions'

const ordenesExamenesSelector = createSelector(
  (state) => state.ordenes_examenes.data ?? [],
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.orden_exam_created_at > b.orden_exam_created_at) {
        return -1
      } else {
        return 1
      }
    })
)
const ordenExamStatusSelector = createSelector(
  (state) => state.ordenes_examenes_status.data ?? []
)
const pacientesSelector = createSelector((state) => state.pacientes.data ?? [])
export const OrdenesExamenesHome = () => {
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      await dispatch(thunkFetchExamenesRealizados)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [mounted, dispatch])
  const pacientes = useSelector(pacientesSelector)
  const ordenesExamenes = useSelector(ordenesExamenesSelector)
  const ordenesExamenesStatus = useSelector(ordenExamStatusSelector)
  const ordenesExamenesPacientesName = ordenesExamenes.map((ordenExamen) => {
    const status = ordenesExamenesStatus.find(
      (orden_exam_status) =>
        ordenExamen.orden_exam_status === orden_exam_status.orden_exam_status_id
    ).orden_exam_status_name
    const currentPaciente = pacientes.find(
      (paciente) => ordenExamen.orden_exam_paciente === paciente.paciente_id
    )
    const paciente_full_name = `${currentPaciente?.paciente_nombre} ${currentPaciente?.paciente_apellido}`
    return {
      ...ordenExamen,
      orden_exam_paciente: paciente_full_name,
      orden_exam_status: status
    }
  })
  return (
    <>
      <Table
        headers={OrdenExamenSchema.tableHeaders}
        data={ordenesExamenesPacientesName}
        keys={OrdenExamenSchema.keys}
        idKey="orden_exam_id"
        actionType="orden_examenes"
      />
    </>
  )
}
