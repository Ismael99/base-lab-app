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
        border_color="gray"
        module_name="Examenes"
        img={examenes_icon}
        text_color="gray"
      />
      <Card
        to="ordenes_examenes"
        border_color="blue"
        module_name="Ordenes Examenes"
        img={orden_examen_icon}
        text_color="blue"
      />
      <Card
        to="quimicos"
        border_color="yellow"
        module_name="Quimicos"
        img={quimico_icon}
        text_color="yellow"
      />
      <Card
        to="pacientes"
        border_color="green"
        module_name="Pacientes"
        img={pacientes_icon}
        text_color="green"
      />
      <Card
        to="logs"
        border_color="red"
        module_name="Logs"
        img={logs_icon}
        text_color="red"
      />
    </div>
  </div>
)
