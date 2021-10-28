import React from 'react'
import { FormWithRender } from '../../../../components/Form/FormWithRender'
import { ExamenRealizadoSchema } from '../../../../schema'
import { setCurrentExamenRealizado } from '../../../../redux/actions/examenesRealizadosActions'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const examenesSelector = createSelector(
  (state) => state.examenes.data ?? [],
  (data) => data.filter((examen) => examen.examen_status !== 2) ?? []
)
export const ExamenesRealizadosFormWithRender = ({
  examenesRealizados,
  id,
  isInterfaceView,
  redirectToBack,
  ...props
}) => {
  const examenes = useSelector(examenesSelector)
  let examenRealizadoCurrent = examenesRealizados?.find((examen_realizado) => {
    return examen_realizado.examen_realizado_id.toString() === id
  })
  const name_exam =
    examenes.length > 0
      ? examenes.find((examen) => {
          return (
            examen.examen_id === examenRealizadoCurrent.examen_realizado_examen
          )
        }).examen_nombre
      : ''
  const examenTempleteSelector = createSelector(
    (state) => state.examenes_templete.data ?? [],
    (data) =>
      data.find((examenTemplete) => {
        return (
          examenTemplete.examen_templete_examen ===
          examenRealizadoCurrent.examen_realizado_examen
        )
      }) ?? []
  )
  const examenTemplete = useSelector(examenTempleteSelector)
  if (
    examenRealizadoCurrent?.examen_realizado_resultados &&
    examenTemplete.examen_templete_campos
  ) {
    examenRealizadoCurrent.examen_realizado_resultados =
      examenRealizadoCurrent?.examen_realizado_resultados[0].value !== ''
        ? examenRealizadoCurrent?.examen_realizado_resultados
        : examenTemplete.examen_templete_campos
    examenRealizadoCurrent.examen_realizado_quimico =
      examenRealizadoCurrent?.examen_realizado_quimico[0].label !== ''
        ? examenRealizadoCurrent?.examen_realizado_quimico
        : examenTemplete.examen_templete_quimicos
  }
  console.log({ examenRealizadoCurrent })
  console.log({ examenTemplete })
  return (
    <FormWithRender
      name_exam={name_exam}
      isInterfaceView={isInterfaceView}
      initialValues={examenRealizadoCurrent}
      schema={ExamenRealizadoSchema}
      setCurrent={setCurrentExamenRealizado}
      currentPath="examenes_realizados"
      {...props}
    />
  )
}
