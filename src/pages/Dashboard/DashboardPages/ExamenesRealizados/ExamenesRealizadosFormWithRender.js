import React from 'react'
import { FormWithRender } from '../../../../components/Form/FormWithRender'
import { ExamenRealizadoSchema } from '../../../../schema'
import { setCurrentExamenRealizado } from '../../../../redux/actions/examenesRealizadosActions'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
export const ExamenesRealizadosFormWithRender = ({
  examenesRealizados,
  id,
  isInterfaceView,
  redirectToBack,
  ...props
}) => {
  let examenRealizadoCurrent = examenesRealizados?.find((examen_realizado) => {
    return examen_realizado.examen_realizado_id.toString() === id
  })
  const quimicosSelector = createSelector(
    (state) => state.quimicos.data ?? [],
    (data) =>
      data.filter((quimico) => {
        return quimico.quimico_status !== 2
      })
  )
  const quimicosExamenesSelector = createSelector(
    (state) => state.quimicos_examenes.data ?? [],
    (data) =>
      data.filter((examen_quimico) => {
        return examen_quimico.quimico_exam_examen_realizado.toString() === id
      })
  )
  const quimicos = useSelector(quimicosSelector)
  const quimicosExamenes = useSelector(quimicosExamenesSelector)
  if (examenRealizadoCurrent)
    examenRealizadoCurrent.examen_realizado_quimicos = quimicosExamenes.map(
      (quimicoExamen) => {
        const quimico_name = quimicos.find((quimico) => {
          return quimico.quimico_id === quimicoExamen.quimico_exam_quimico
        }).quimico_nombre
        return {
          value: quimicoExamen.quimico_exam_quimico,
          label: quimico_name
        }
      }
    )
  debugger
  return (
    <FormWithRender
      isInterfaceView={isInterfaceView}
      initialValues={examenRealizadoCurrent}
      schema={ExamenRealizadoSchema}
      setCurrent={setCurrentExamenRealizado}
      currentPath="examenes_realizados"
      {...props}
    />
  )
}
