import React from 'react'
import { ExamenesRealizadosFormWithRender } from './ExamenesRealizadosFormWithRender'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const examenesRealizadosSelector = createSelector(
  (state) => state.examenes_realizados.data ?? []
)
export const ExamenRealizadoEdit = ({ id, ...props }) => {
  const examenes_realizados = useSelector(examenesRealizadosSelector)
  console.log({ examenes_realizados })
  return (
    <ExamenesRealizadosFormWithRender
      examenesRealizados={examenes_realizados}
      id={id}
      isInterfaceView={false}
      {...props}
    />
  )
}
