import React from 'react'
import { ExamenesRealizadosForm } from './ExamenesRealizadosForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const examenesRealizadosSelector = createSelector(
  (state) => state.examenes_realizados.data ?? []
)

export const ExamenRealizadoEdit = ({ id, ...props }) => {
  const examenes_realizados = useSelector(examenesRealizadosSelector)
  return (
    <ExamenesRealizadosForm
      examenesRealizados={examenes_realizados}
      id={id}
      isInterfaceView={false}
      {...props}
    />
  )
}
