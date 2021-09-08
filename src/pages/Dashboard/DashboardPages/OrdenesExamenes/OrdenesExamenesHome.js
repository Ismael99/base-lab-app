import React, { useEffect, useState } from 'react'
import { Table } from '../../../../components/Table'
import { OrdenExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchExamenesRealizados } from '../../../../redux/actions/examenesRealizadosActions'

const ordenesExamenesSelector = createSelector(
  (state) => state.ordenes_examenes.data ?? [],
  (data) =>
    data.sort((a, b) => {
      if (a.orden_exam_created_at > b.orden_exam_created_at) {
        return -1
      } else {
        return 1
      }
    })
)
const ordenesExamenesStatusSelector = createSelector(
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
  const ordenesExamenesStatus = useSelector(ordenesExamenesStatusSelector)
  console.log({ ordenesExamenes })
  console.log({ pacientes })
  const ordenesExamenesPacientesName = ordenesExamenes.map((ordenExamen) => {
    const currentPaciente = pacientes.find(
      (paciente) => ordenExamen.orden_exam_paciente === paciente.paciente_id
    )
    const paciente_full_name = `${currentPaciente?.paciente_nombre} ${currentPaciente?.paciente_apellido}`
    const currentState = ordenesExamenesStatus.find(
      (ordenExamenStatus) =>
        ordenExamen.orden_exam_status === ordenExamenStatus.orden_exam_status_id
    )
    return {
      ...ordenExamen,
      orden_exam_paciente: paciente_full_name,
      orden_exam_status: currentState.orden_exam_status_name
    }
  })
  console.log({ ordenesExamenesPacientesName })
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
