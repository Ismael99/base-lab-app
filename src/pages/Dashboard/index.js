import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Router, useNavigate } from '@reach/router'
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
import { Logs } from './DashboardPages/Logs'
import { Home } from './DashboardPages/Home'
import { Home as Login } from '../Home'
import { OrdenesExamenes } from './DashboardPages/OrdenesExamenes'
import { ExamenesRealizados } from './DashboardPages/ExamenesRealizados'
import { NotFound } from '../SiteStatus/NotFound'
import { useDispatch } from 'react-redux'
import { setLoggedUser } from '../../redux/actions/loginActions'
import { Me } from './DashboardPages/Me'
const Section = ({ title }) => (
  <div className="bg-gray-50">
    <h1 className="text-2xl">{title}</h1>
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export const Dashboard = () => {
  const dispatch = useDispatch()
  const [path, setPath] = useState('')
  const navigate = useNavigate()

  const user = JSON.parse(window.localStorage.getItem('user'))
  const token = window.localStorage.getItem('token')

  if (!token || !user) {
    navigate('/')
    return <Login />
  }

  dispatch(setLoggedUser(user))

  return (
    <DashboardContainer>
      <DashboardSidebar />
      <DashboardContent>
        <DashboardNav setPath={setPath} />
        <DashboardMainContent>
          <Router className="h-full">
            <Home path="/" />
            <Users path="users/*" />
            <Pacientes path="pacientes/*" />
            <Examenes path="examenes/*" />
            <Quimicos path="quimicos/*" />
            <Test path="test" />
            <Roles path="roles" />
            <ExamenesRealizados path="examenes_realizados/*" />
            <OrdenesExamenes path="ordenes_examenes/*" />
            <Logs path="logs" />
            <Me path="me" currentPath={path} />
            <NotFound default />
          </Router>
        </DashboardMainContent>
      </DashboardContent>
    </DashboardContainer>
  )
}
