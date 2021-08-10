import React from 'react'
import { ExamenesForm } from './ExamenesForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const examenesSelector = createSelector(
  (state) => (state.examenes.data ? state.examenes.data : []),
  (data) => data.filter((examen) => examen.examen_status !== 2)
)
export const ExamenDetail = ({ id }) => {
  const examenes = useSelector(examenesSelector)
  return <ExamenesForm examenes={examenes} id={id} isInterfaceView={true} />
}
