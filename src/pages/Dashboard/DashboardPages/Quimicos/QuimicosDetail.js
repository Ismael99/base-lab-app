import React from 'react'
import { QuimicosForm } from './QuimicosForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const quimicosSelector = createSelector(
  (state) => (state.quimicos.data ? state.quimicos.data : []),
  (data) => data.filter((quimico) => quimico.quimico_status !== 2)
)
export const QuimicoDetail = ({ id }) => {
  const quimicos = useSelector(quimicosSelector)
  return <QuimicosForm quimicos={quimicos} id={id} isInterfaceView={true} />
}
