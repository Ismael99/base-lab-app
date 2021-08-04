import React, { useEffect, useState } from 'react'
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
import { Roles } from './DashboardPages/Roles'
import { Home } from './DashboardPages/Home'
import { thunkFecthUsers } from '../../redux/actions/usersActions'
import { LoaderPage } from '../../components/Loader/LoaderPage'
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      console.log('fetching')
      setLoading(true)
      await dispatch(thunkFecthUsers)
      setLoading(false)
    }
    fetch()
  }, [dispatch])
  console.log(loading)
  if (loading) return <LoaderPage />
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
            <Test path="test" />
            <Roles path="roles" />
            <NotFound default />
          </Router>
        </DashboardMainContent>
      </DashboardContent>
    </DashboardContainer>
  )
}
