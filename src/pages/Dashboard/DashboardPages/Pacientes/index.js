import React from 'react'
import { Router } from '@reach/router'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { PacientesHome } from './PacientesHome'
import { NotFound } from '../../../SiteStatus/NotFound'
import {
  savePaciente,
  updatePaciente
} from '../../../../redux/actions/pacientesAction'

const pacientesSelector = createSelector((state) => state.pacientes.state.data)

export const Pacientes = () => {
  const pacientes = useSelector(pacientesSelector)
  console.log(pacientes)
  return (
    <DashboardSection>
      <DashboardSectionTitle title="Pacientes" />
      <DashboardSectionContent>
        <Router>
          <PacientesHome pacientes={pacientes} path="/" title="Ver" />
          <NotFound default />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
