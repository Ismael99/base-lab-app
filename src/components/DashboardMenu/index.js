import React from 'react'
import { UserRoutes, PacientesRoutes, RolesRoutes, ExamenesRoutes, QuimicosRoutes, LogsRoutes } from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'
import { HomeIcon, UsersIcon, BriefcaseIcon, BeakerIcon, ClipboardListIcon} from '@heroicons/react/outline'

export const DashboardMenu = () => (
  <>
    <DashboardMenuItem
      title="Usuarios"
      path="users"
      links={UserRoutes}
      icon={HomeIcon}
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
      title="Logs"
      path="logs"
      links={LogsRoutes}
      icon={ClipboardListIcon}
    />
  </>
)
