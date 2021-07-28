import React from 'react'
import { UserRoutes, PacientesRoutes } from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'
import { HomeIcon, UsersIcon } from '@heroicons/react/outline'

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
  </>
)
