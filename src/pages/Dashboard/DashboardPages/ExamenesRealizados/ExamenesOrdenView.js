import React from 'react'
import { createSelector } from 'selector'
import { Table } from '../../../../components/Table'
import { ExamenRealizadoSchema } from '../../../../schema/'
import { useSelector } from 'react-redux'
import { Link } from '@reach/router'
import {
  CheckCircleIcon,
  UsersIcon,
  UserIcon,
  PrinterIcon
} from '@heroicons/react/outline'

export const ExamenesOrdenView = ({ id }) => {
  const ordenExamenCurrentSelector = createSelector(
    (state) => state.ordenes_examenes.data ?? [],
    (data) =>
      data.find((orden_examen) => {
        return orden_examen.orden_exam_id.toString() === id
      })
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
  const examenesSelector = createSelector(
    (state) => state.examenes.data ?? [],
    (data) => data.filter((examen) => examen.examen_status !== 2)
  )

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
    debugger
    return currentValue.examen_realizado_resultados[0].value !== ''
  }

  //Validar para mostrar el boton de imprimir o no
  const showBtnPrint = examenesOrden.every(validateResultados)
  console.log({ showBtnPrint })

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <div className="xl:w-1/2 w-full xl:order-1 order-2 px-3  my-4 text-lg">
          <p>
            <span className="flex flex-row items-center">
              <UserIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Doctor Responsable: </p>
              {ordenExamenCurrent?.orden_exam_dr_responsable}
            </span>
          </p>
          <p>
            <span className="flex flex-row items-center">
              <CheckCircleIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Estado de Orden: </p>
              {currentStateOrden?.orden_exam_status_name}
            </span>
          </p>
          <p>
            <span className="flex flex-row items-center">
              <UsersIcon className="w-5 h-5 mr-1" />
              <p className="mr-1 font-extrabold">Paciente: </p>
              {pacienteCurrent?.paciente_nombre}{' '}
              {pacienteCurrent?.paciente_apellido}
            </span>
          </p>
        </div>
        <div
          className={`xl:w-1/2 w-full flex xl:order-2 order-1 px-3 flex-row ${
            showBtnPrint ? ' justify-between ' : ' justify-end '
          } items-center xl:justify-end`}
        >
          {showBtnPrint && (
            <Link
              to="/dashboard/ordenes_examenes"
              className="flex flex-row items-center justify-center w-auto h-10 px-4 my-3 mr-4 py-4 w-auto text-xl text-green-300 border border-green-400 rounded-md transform hover:scale-110 hover:text-green-400"
            >
              <span className="flex flex-row items-center">
                <PrinterIcon className="w-5 h-5 mr-3" />
                <p>Imprimir</p>
              </span>
            </Link>
          )}
          <Link
            to="/dashboard/ordenes_examenes"
            className="flex flex-row items-center justify-center w-auto h-10 px-4 py-4 my-3 w-auto text-xl text-red-300 border border-red-400 rounded-md transform hover:scale-110 hover:text-red-400"
          >
            <span className="flex flex-row">
              <p className="mr-3">{'\u21a9'}</p>
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
