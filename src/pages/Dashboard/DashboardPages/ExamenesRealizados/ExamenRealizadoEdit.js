import React from 'react'
import { ExamenesRealizadosFormWithRender } from './ExamenesRealizadosFormWithRender'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const examenesRealizadosSelector = createSelector(
  (state) => state.examenes_realizados.data ?? []
)

const quimicosSelector = createSelector(
  (state) => state.quimicos.data ?? [],
  (data) =>
    data.filter((quimico) => {
      return quimico.quimico_status !== 2
    })
)

export const ExamenRealizadoEdit = ({ id, ...props }) => {
  const examenes_realizados = useSelector(examenesRealizadosSelector)
  const quimicos = useSelector(quimicosSelector)
  return (
    <ExamenesRealizadosFormWithRender
      examenesRealizados={examenes_realizados}
      id={id}
      isInterfaceView={false}
      {...props}
    />
  )
}
