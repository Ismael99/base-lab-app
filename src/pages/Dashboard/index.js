import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'
import { DashboardNav } from '../../components/DashboardNav'
import { DashboardSidebar } from '../../components/DashboardSidebar'
import { DashboardContainer } from './DashboardContainer'
import { DashboardContent } from './DashboardContent'
import { DashboardMainContent } from './DashboardMainContent'
import { Test } from './DashboardPages/Test'
import { Users } from './DashboardPages/Users'
import { Pacientes } from './DashboardPages/Pacientes'
import { Examenes } from './DashboardPages/Examenes'
import { Quimicos } from './DashboardPages/Quimicos'
import { Roles } from './DashboardPages/Roles'
import { Home } from './DashboardPages/Home'
import { NotFound } from '../SiteStatus/NotFound'
const Section = ({ title }) => (
  <div className="bg-gray-50">
    <h1 className="text-2xl">{title}</h1>
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <DashboardContent>
        <DashboardNav />
        <DashboardMainContent>
          <Router className="h-full">
            <Home path="/" />
            <Users path="users/*" />
            <Pacientes path="pacientes/*" />
            <Examenes path="examenes/*" />
            <Quimicos path="quimicos/*" />
            <Test path="test" />
            <Roles path="roles" />
            <NotFound default />
          </Router>
        </DashboardMainContent>
      </DashboardContent>
    </DashboardContainer>
  )
}
