import React from 'react'
import logo_lab from '../../assets/logo_lab.png'
import logo_lab_name from '../../assets/logo_lab_name.png'
import { FormatDate } from '../../utils/FormatDate'
export const HeadExam = ({ ordenExamenCurrent = {}, pacienteCurrent = {} }) => {
  const {
    orden_exam_id,
    orden_exam_dr_responsable,
    orden_exam_created_at
  } = ordenExamenCurrent
  const {
    paciente_nombre,
    paciente_apellido,
    paciente_edad,
    paciente_sexo
  } = pacienteCurrent
  return (
    <>
      <div className="flex flex-col w-full px-5 pt-10 bg-white">
        <div className="flex flex-row">
          <span className="flex flex-col justify-center w-auto">
            <img src={logo_lab} className="w-16 mx-auto" alt="logo-empresa" />
            <img src={logo_lab_name} className="w-32" alt="nombre-empresa" />
          </span>
          <span className="flex flex-col justify-center w-full">
            <p className="text-2xl font-extrabold text-center text-blue-500">
              "Laboratorio Clínico
            </p>
            <p className="text-xl font-extrabold text-center text-blue-500">
              BioCare"
            </p>
            <p className="text-center text-xs">
              6ª calle poniente #309, Local #1, Barrio San Francisco, San
              Miguel.
            </p>
            <p className="text-center text-xs">Tel: 2661-4355/ 6013-3131.</p>
            <p className="text-center text-xs">
              Horario De Atención:
              <p>
                Lunes a Viernes de 6:30 a.m. a 4:00 p.m. Y Sábado de 6.30 a.m. a
                12:00 p.m.
              </p>
            </p>
          </span>
        </div>
        <div className="flex flex-col w-full text-sm mx-auto mt-1 border-2 border-black rounded-md">
          <div className="flex flex-row">
            <div className="flex flex-col p-1 border-r-2 border-black w-1/6">
              <p className="font-bold">No de Orden</p>
              <p className="text-center">{orden_exam_id}</p>
            </div>
            <div className="flex flex-col p-1 border-r-2 border-black w-2/5">
              <p className="font-bold">Nombre del Paciente</p>
              <p>{`${paciente_nombre} ${paciente_apellido}`}</p>
            </div>
            <div className="flex flex-col p-1 border-r-2 border-black w-3/12">
              <div className="flex flex-row justify-around">
                <p className="font-bold">Edad</p>
                <p className="font-bold">Sexo</p>
              </div>
              <div className="flex flex-row justify-around">
                <p className="font-bold">{paciente_edad}</p>
                <p className="font-bold">{paciente_sexo}</p>
              </div>
            </div>
            <div className="flex flex-col p-1 border-r-2 border-black w-1/5">
              <p className="font-bold">Fecha de Orden</p>
              <p className="text-center">
                {FormatDate(new Date(orden_exam_created_at))}
              </p>
            </div>
            <div className="flex flex-col p-1 w-3/12">
              <p className="font-bold">Fecha de Reporte</p>
              <p className="text-center">
                {FormatDate(new Date(orden_exam_created_at))}
              </p>
            </div>
          </div>
          <div className="flex-row border-t-2 border-black p-1">
            <p className="font-bold">Doctor que Refiere</p>
            <p>{orden_exam_dr_responsable}</p>
          </div>
        </div>
      </div>
    </>
  )
}
