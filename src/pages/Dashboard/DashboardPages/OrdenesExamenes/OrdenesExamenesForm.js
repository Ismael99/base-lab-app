import React, { useState, useEffect } from 'react'
import { Form } from '../../../../components/Form'
import { OrdenExamenSchema } from '../../../../schema'
import { setCurrentOrdenExamen } from '../../../../redux/actions/ordenesExamenesActions'
import { datalistTransform } from '../../../../utils/DatalistTransformValues'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'
import { createSelector } from 'selector'
import { concatLabel } from '../../../../utils/concatLabel'

export const OrdenesExamenesForm = ({
  ordenesExamenes,
  id,
  isInterfaceView,
  ...props
}) => {
  const ordenExamenCurrent = ordenesExamenes?.find((orden_examen) => {
    return orden_examen.orden_exam_id.toString() === id
  })
  const dispatch = useDispatch()
  //SELECTORS
  const selectorExamenesRealizados = createSelector(
    (state) => state.examenes_realizados.data ?? [],
    (data) =>
      data.filter((examen_realizado) => {
        return (
          examen_realizado.examen_realizado_orden_examen ===
          ordenExamenCurrent?.orden_exam_id
        )
      })
  )
  const selectorExamenes = createSelector(
    (state) => state.examenes.data ?? [],
    (data) => data.filter((examen) => examen.examen_status !== 2)
  )
  //DATA
  const examenes = useSelector(selectorExamenes)
  const examenesRealizados = useSelector(selectorExamenesRealizados)
  console.log(examenesRealizados)
  //STATES
  const [errors, setErrors] = useState({
    examenes_realizados: 'Campo Requerido'
  })
  const [total, setTotal] = useState(
    ordenExamenCurrent?.orden_exam_total_precio || 0
  )
  const [mounted, setMounted] = useState(true)
  const [stateForm, setStateForm] = useState([])
  useEffect(() => {
    if (mounted) {
      const currentValueDatalist = examenesRealizados.map(
        (examen_realizado) => {
          let label = examenes.find((examen) => {
            console.log(examen.examen_id, examen_realizado.examen_realizado_id)
            return examen.examen_id === examen_realizado.examen_realizado_examen
          })
          label = concatLabel(['examen_nombre', 'examen_precio'], label)
          return {
            value: examen_realizado.examen_realizado_id,
            label
          }
        }
      )
      setErrors({
        examenes_realizados: 'Campo Requerido'
      })
      if (currentValueDatalist) setStateForm(currentValueDatalist)
      else setStateForm([])
      console.log({ examenes })
    }
    return () => {
      setMounted(false)
    }
  }, [mounted, dispatch, id, ordenesExamenes, examenesRealizados])
  const onChangeDatalist = (value) => {
    if (!value || value.length === 0) {
      setErrors({
        examenes_realizados: 'Campo requerido'
      })
    } else {
      setErrors({
        examenes_realizados: ''
      })
    }
    setStateForm(value)
    const lengthStateForm = value.length
    let totalPrecio = 0
    for (let i = 0; i < lengthStateForm; i++) {
      totalPrecio += parseFloat(value[i].examen_precio, 10)
    }
    setTotal(totalPrecio.toFixed(2))
  }
  const customOnSubmit = (
    values,
    { setSubmitting },
    setCurrent,
    toDispatch,
    currentPath
  ) => {
    if (errors.examenes_realizados === '') {
      values = datalistTransform(values)
      const examenes_realizados = stateForm.map((examen_realizado) => {
        return { examen_realizado_examen: examen_realizado.value }
      })
      values.examenes_realizados = examenes_realizados
      values.orden_exam_total_precio = total
      dispatch(setCurrent(values))
      dispatch(toDispatch)
      setSubmitting(false)
      console.log('Submiting...')
      console.log(values)
      navigate(`/dashboard/${currentPath}`, { replace: true })
    }
  }
  return (
    <Form
      customOnSubmit={customOnSubmit}
      valueExtraInput={total}
      valueDatalist={stateForm}
      errorDatalist={errors}
      onChangeDatalist={onChangeDatalist}
      isInterfaceView={isInterfaceView}
      initialValues={ordenExamenCurrent}
      schema={OrdenExamenSchema}
      setCurrent={setCurrentOrdenExamen}
      currentPath="ordenes_examenes"
      {...props}
    />
  )
}
