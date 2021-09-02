import React, { useEffect, useState } from 'react'
import { Table } from '../../../../components/Table'
import { OrdenExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchExamenesRealizados } from '../../../../redux/actions/examenesRealizadosActions'

const ordenesExamenesSelector = createSelector(
  (state) => state.ordenes_examenes.data ?? [],
  (data) =>
    data.filter((orden_examen) => orden_examen?.orden_exam_status !== 2) ?? [],
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.orden_exam_created_at > b.orden_exam_created_at) {
        return -1
      } else {
        return 1
      }
    })
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
  console.log({ ordenesExamenes })
  console.log({ pacientes })
  const ordenesExamenesPacientesName = ordenesExamenes.map((ordenExamen) => {
    const currentPaciente = pacientes.find(
      (paciente) => ordenExamen.orden_exam_paciente === paciente.paciente_id
    )
    const paciente_full_name = `${currentPaciente.paciente_nombre} ${currentPaciente.paciente_apellido}`
    return {
      ...ordenExamen,
      orden_exam_paciente: paciente_full_name
    }
  })
  return (
    <>
      <Table
        headers={OrdenExamenSchema.tableHeaders}
        data={ordenesExamenesPacientesName}
        keys={OrdenExamenSchema.keys}
        idKey="orden_exam_id"
        actionType="only_detail"
      />
    </>
  )
}
