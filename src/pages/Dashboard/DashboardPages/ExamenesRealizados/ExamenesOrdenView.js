import React from 'react'
import { createSelector } from 'selector'
import { Table } from '../../../../components/Table'
import { ExamenRealizadoSchema } from '../../../../schema/'
import { useSelector } from 'react-redux'
import { Link } from '@reach/router'
import { CheckCircleIcon, UsersIcon, UserIcon } from '@heroicons/react/outline'

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
  console.log({ data })
  return (
    <>
      <div className="flex flex-row">
        <div className="w-11/12 my-4 text-lg">
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
        <Link
          to="/dashboard/ordenes_examenes"
          className="flex flex-row items-center justify-center w-auto h-10 px-4 py-4 my-auto text-xl text-red-300 border border-red-400 rounded-md transform hover:scale-110 hover:text-red-400"
        >
          <span className="flex flex-row">
            <p className="mr-3">{'\u21a9'}</p>
            <p>Atras</p>
          </span>
        </Link>
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
