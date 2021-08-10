import React from 'react'
import {
  UserRoutes,
  PacientesRoutes,
  RolesRoutes,
  LogsRoutes
} from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  ClipboardListIcon
} from '@heroicons/react/outline'

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
