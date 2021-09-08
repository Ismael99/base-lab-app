import React from 'react'
import { OrdenesExamenesForm } from './OrdenesExamenesForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const ordenesExamenesSelector = createSelector((state) =>
  state.ordenes_examenes.data ? state.ordenes_examenes.data : []
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
