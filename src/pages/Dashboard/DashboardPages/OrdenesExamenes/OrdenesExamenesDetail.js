import React from 'react'
import { OrdenesExamenesForm } from './OrdenesExamenesForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const ordenesExamenesSelector = createSelector(
  (state) => (state.ordenes_examenes.data ? state.ordenes_examenes.data : []),
  (data) => data.filter((orden_examen) => orden_examen.orden_exam_status !== 2)
)
export const OrdenExamenDetail = ({ id }) => {
  const ordenes_examenes = useSelector(ordenesExamenesSelector)
  return (
    <OrdenesExamenesForm
      ordenesExamenes={ordenes_examenes}
      id={id}
      isInterfaceView={true}
    />
  )
}
