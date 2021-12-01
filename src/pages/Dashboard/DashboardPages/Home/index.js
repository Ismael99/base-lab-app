import React from 'react'
import { Card } from './Card'
import orden_examen_icon from '../../../../assets/orden_exam_icon.png'
import quimico_icon from '../../../../assets/quimicos_icon.png'
import pacientes_icon from '../../../../assets/pacientes_icon.png'
import logs_icon from '../../../../assets/logs_icon.png'
import examenes_icon from '../../../../assets/examenes_icon.png'
import './index.css'
export const Home = () => (
  <div className="flex home-bg w-full h-full my-auto flex-col flex-wrap items-center justify-center lg:flex-row items-center">
    <div className="flex flex-row flex-wrap items-center justify-center">
      <Card
        to="examenes"
        border_color="border-gray-400"
        bg_color="bg-gray-100"
        text_color="text-gray-500"
        module_name="Examenes"
        img={examenes_icon}
      />
      <Card
        to="ordenes_examenes"
        border_color="border-blue-400"
        bg_color="bg-blue-100"
        text_color="text-blue-500"
        module_name="Ordenes Examenes"
        img={orden_examen_icon}
      />
      <Card
        to="quimicos"
        border_color="border-yellow-400"
        bg_color="bg-yellow-100"
        text_color="text-yellow-500"
        module_name="Quimicos"
        img={quimico_icon}
      />
      <Card
        to="pacientes"
        border_color="border-green-400"
        bg_color="bg-green-100"
        text_color="text-green-500"
        module_name="Pacientes"
        img={pacientes_icon}
        d
      />
      <Card
        to="logs"
        border_color="border-red-400"
        bg_color="bg-red-100"
        text_color="text-red-500"
        module_name="Logs"
        img={logs_icon}
      />
    </div>
  </div>
)
