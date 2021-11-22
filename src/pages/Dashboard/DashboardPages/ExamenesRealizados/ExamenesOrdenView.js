import React, { useRef, useState, useEffect } from 'react'
import { createSelector } from 'selector'
import { Table } from '../../../../components/Table'
import { ExamenRealizadoSchema } from '../../../../schema/'
import { useSelector } from 'react-redux'
import { Link } from '@reach/router'
import ExamenToPrint from '../../../../components/ExamenToPrint'
import { useReactToPrint } from 'react-to-print'
import { useDispatch } from 'react-redux'
import {
  updateOrdenExamen,
  setCurrentOrdenExamen
} from '../../../../redux/actions/ordenesExamenesActions'
import {
  CheckCircleIcon,
  UsersIcon,
  UserIcon,
  PrinterIcon,
  ArrowLeftIcon
} from '@heroicons/react/outline'
export const ExamenesOrdenView = ({ id }) => {
  const componentToPrintRef = useRef()
  const dispatch = useDispatch()
  const [showBtnPrint, setShowBtnPrint] = useState(false)
  const handlePrint = useReactToPrint({
    content: () => componentToPrintRef.current
  })
  const ordenExamenCurrentSelector = createSelector(
    (state) => state.ordenes_examenes.data ?? [],
    (data) =>
      data.find((orden_examen) => {
        return orden_examen.orden_exam_id.toString() === id
      }) ?? []
  )
  const examenesOrdenSelector = createSelector(
    (state) => state.examenes_realizados.data ?? [],
    (data) =>
      data.filter(
        (examen_realizado) =>
          examen_realizado.examen_realizado_orden_examen.toString() === id
      )
  )
  const ordenExamenesStatusSelector = createSelector(
    (state) => state.ordenes_examenes_status.data ?? []
  )
  const examenesSelector = createSelector((state) => state.examenes.data ?? [])
  const ordenExamenCurrent = useSelector(ordenExamenCurrentSelector)
  const pacienteCurrentSelector = createSelector(
    (state) => state.pacientes.data ?? [],
    (date) =>
      date.find((paciente) => {
        return paciente.paciente_id === ordenExamenCurrent.orden_exam_paciente
      })
  )
  const pacienteCurrent = useSelector(pacienteCurrentSelector)
  //Examenes realizados de la orden actual
  const examenesOrden = useSelector(examenesOrdenSelector)
  const ordenesExamenesStatus = useSelector(ordenExamenesStatusSelector)
  const examenes = useSelector(examenesSelector)
  const currentStateOrden = ordenesExamenesStatus.find((orden_exam_status) => {
    return (
      orden_exam_status.orden_exam_status_id ===
      ordenExamenCurrent.orden_exam_status
    )
  })
  const data = examenesOrden.map((examen_orden) => ({
    ...examen_orden,
    examen_realizado_examen: examenes
      ? examenes.find(
          (examen) => examen_orden.examen_realizado_examen === examen.examen_id
        ).examen_nombre
      : ''
  }))
  const validateResultados = (currentValue) => {
    return (
      currentValue.examen_realizado_resultados[0].value !== '' &&
      currentValue.examen_realizado_resultados[0].value !== undefined
    )
  }
  //Validar para mostrar el boton de imprimir o no
  useEffect(() => {
    const fetch = async () => {
      const completado = examenesOrden.every(validateResultados)
      if (completado !== showBtnPrint && examenesOrden.length > 0) {
        setShowBtnPrint(completado)
        await dispatch(
          setCurrentOrdenExamen({
            ...ordenExamenCurrent,
            orden_exam_status: completado === false ? 1 : 2
          })
        )
        await dispatch(updateOrdenExamen)
      }
    }
    fetch()
  }, [ordenExamenCurrent, examenesOrden])
  return (
    <>
      {ordenExamenCurrent && pacienteCurrent && data && (
        <ExamenToPrint
          ref={componentToPrintRef}
          ordenExamenCurrent={ordenExamenCurrent}
          pacienteCurrent={pacienteCurrent}
          examenesRealizadosOrden={data}
        />
      )}
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="w-full px-3 my-4 text-lg xl:w-1/2">
          <div>
            <span className="flex flex-row items-center">
              <UsersIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Paciente: </p>
              {pacienteCurrent?.paciente_nombre}{' '}
              {pacienteCurrent?.paciente_apellido}
            </span>
          </div>
          <div>
            <span className="flex flex-row items-center">
              <UserIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Doctor Responsable: </p>
              {ordenExamenCurrent?.orden_exam_dr_responsable}
            </span>
          </div>
          <div>
            <span
              className={`flex flex-row items-center text-white p-1 ${
                showBtnPrint ? 'bg-green-600' : 'bg-red-600'
              } w-max`}
            >
              <CheckCircleIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Estado de Orden: </p>
              {currentStateOrden?.orden_exam_status_name}
            </span>
          </div>
        </div>
        <div
          className={`lg:w-1/2 w-full mb-3 flex px-3 lg:flex-row flex-col justify-end items-center`}
        >
          {showBtnPrint && (
            <button
              onClick={handlePrint}
              className="flex flex-row items-center justify-center w-auto w-2/3 h-10 px-4 py-4 my-3 mr-3 text-xl text-white bg-green-600 border border-green-400 lg:w-auto rounded-md transform hover:scale-110 hover:bg-opacity-40"
            >
              <span className="flex flex-row items-center">
                <PrinterIcon className="w-5 h-5 mr-3" />
                <p>Imprimir</p>
              </span>
            </button>
          )}
          <Link
            to="/dashboard/ordenes_examenes"
            className="flex flex-row items-center justify-center w-auto w-2/3 h-10 px-4 py-4 my-3 text-xl text-white bg-red-600 border border-red-400 lg:w-auto rounded-md transform hover:scale-110 hover:bg-opacity-40"
          >
            <span className="flex flex-row">
              <ArrowLeftIcon className="w-5" />
              <p>Atras</p>
            </span>
          </Link>
        </div>
      </div>
      <Table
        headers={ExamenRealizadoSchema.tableHeaders}
        data={data}
        keys={ExamenRealizadoSchema.keys}
        idKey="examen_realizado_id"
        actionType="examenes_realizados"
      />
    </>
  )
}
