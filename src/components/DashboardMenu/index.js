import React from 'react'
import {
  UserRoutes,
  PacientesRoutes,
  RolesRoutes,
  ExamenesRoutes,
  QuimicosRoutes,
  LogsRoutes,
  OrdenesExamenesRoutes
} from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'
import {
  HomeIcon,
  UsersIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BeakerIcon,
  ClipboardListIcon,
  FolderOpenIcon
} from '@heroicons/react/outline'
import { Link } from '@reach/router'
export const DashboardMenu = () => (
  <>
    <span className="flex flex-row w-full">
      <Link
        className="flex flex-row rounded-md mb-4 hover:bg-blue-200 transform hover:scale-105 hover:border-blue-200 w-full text-center justify-center border text-gray-500 px-5 py-2"
        to="/dashboard"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Inicio
      </Link>
    </span>
    <DashboardMenuItem
      title="Usuarios"
      path="users"
      links={UserRoutes}
      icon={UserGroupIcon}
      onClick={() => console.log('Users Button')}
    />
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
      title="Roles"
      path="roles"
      links={RolesRoutes}
      icon={BriefcaseIcon}
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
