import React from 'react'
import { createSelector } from 'selector'
import { Table } from '../../../../components/Table'
import { ExamenRealizadoSchema } from '../../../../schema/'
import { useDispatch, useSelector } from 'react-redux'

export const ExamenesOrdenView = ({ id }) => {
  const dispatch = useDispatch()
  const ordenExamenCurrentSelector = createSelector(
    (state) => state.ordenes_examenes.data ?? [],
    (data) =>
      data.find((orden_examen) => {
        return orden_examen.orden_exam_id.toString() === id
      })
  )
  const examenesOrdenSelector = createSelector(
    (state) => state.examenes_realizados.data ?? [],
    (data) =>
      data.filter(
        (examen_realizado) =>
          examen_realizado.examen_realizado_orden_examen.toString() === id
      )
  )
  const ordenExamenesStatusSelector = createSelector(
    (state) => state.ordenes_examenes_status.data ?? []
  )
  const examenesSelector = createSelector(
    (state) => state.examenes.data ?? [],
    (data) => data.filter((examen) => examen.examen_status !== 2)
  )

  const ordenExamenCurrent = useSelector(ordenExamenCurrentSelector)
  const examenesOrden = useSelector(examenesOrdenSelector)
  const ordenesExamenesStatus = useSelector(ordenExamenesStatusSelector)
  const examenes = useSelector(examenesSelector)
  const currentStateOrden = ordenesExamenesStatus.find((orden_exam_status) => {
    return (
      orden_exam_status.orden_exam_status_id ===
      ordenExamenCurrent.orden_exam_status
    )
  })
  console.log({ ordenExamenCurrent })
  console.log({ ordenesExamenesStatus })
  console.log({ currentStateOrden })
  console.log({ examenes })
  console.log({ examenesOrden })
  const data = examenesOrden.map((examen_orden) => ({
    ...examen_orden,
    examen_realizado_examen: examenes
      ? examenes.find(
          (examen) => examen_orden.examen_realizado_examen === examen.examen_id
        ).examen_nombre
      : ''
  }))
  console.log({ data })
  return (
    <>
      <div>
        <p>{ordenExamenCurrent?.orden_exam_dr_responsable}</p>
        <p>{currentStateOrden?.orden_exam_status_name}</p>
        <p>paciente</p>
      </div>
      <Table
        headers={ExamenRealizadoSchema.tableHeaders}
        data={data}
        keys={ExamenRealizadoSchema.keys}
        idKey="examen_realizado_id"
        actionType="examenes_realizados"
      />
    </>
  )
}
