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
  const QuimicosExamenesSelector = createSelector(
    (state) => state.quimicos_examenes.data ?? [],
    (data) =>
      data.filter((examen_quimico) => {
        return examen_quimico.quimico_exam_examen_realizado === id
      })
  )
  const examenes_realizados = useSelector(examenesRealizadosSelector)
  const quimicos = useSelector(quimicosSelector)
  const quimicoExamen = useSelector(QuimicosExamenesSelector)
  const data = {
    ...examenes_realizados,
    examen_realizado_quimicos: quimicos.map((quimico) => {
      return quimicoExamen.quimico_exam_quimico === quimico.quimico_id
    }).quimico_nombre
  }
  return (
    <ExamenesRealizadosFormWithRender
      examenesRealizados={examenes_realizados}
      id={id}
      isInterfaceView={false}
      {...props}
    />
  )
}
