import React from 'react'
import { infoCompanyData } from '../../data_test/company_info'
import {
  PacientesRoutes,
  ExamenesRoutes,
  QuimicosRoutes,
  LogsRoutes,
  OrdenesExamenesRoutes
} from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'
import {
  HomeIcon,
  UsersIcon,
  BeakerIcon,
  ClipboardListIcon,
  FolderOpenIcon
} from '@heroicons/react/outline'
import { Link } from '@reach/router'
export const DashboardMenu = () => (
  <>
    <div className="flex w-full mb-5 flex-col justify-center items-center">
      <img src={infoCompanyData.logo} alt="logo" className="w-10 mx-3" />
      <img
        src={infoCompanyData.company_name_img}
        alt="logo-name"
        className="mx-3 w-28"
      />
    </div>
    <span className="flex flex-row w-full">
      <Link
        className="flex flex-row justify-center w-full px-5 py-2 mb-4 text-center text-gray-500 border rounded-md hover:bg-blue-200 transform hover:scale-105 hover:border-blue-200"
        to="/dashboard"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Inicio
      </Link>
    </span>
    <DashboardMenuItem
      title="Pacientes"
      path="pacientes"
      links={PacientesRoutes}
      icon={UsersIcon}
    />
    <DashboardMenuItem
      title="Examenes"
      path="examenes"
      links={ExamenesRoutes}
      icon={ClipboardListIcon}
    />
    <DashboardMenuItem
      title="Quimicos"
      path="quimicos"
      links={QuimicosRoutes}
      icon={BeakerIcon}
    />
    <DashboardMenuItem
      title="Ordenes Examenes"
      path="ordenes_examenes"
      links={OrdenesExamenesRoutes}
      icon={FolderOpenIcon}
    />
    <DashboardMenuItem
      title="Logs"
      path="logs"
      links={LogsRoutes}
      icon={ClipboardListIcon}
    />
  </>
)
