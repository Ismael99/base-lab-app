import React from 'react'
import { Router, navigate } from '@reach/router'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NotFound2 } from './pages/SiteStatus/NotFound2'
import ExamenToPrint from './components/ExamenToPrint'

const token = window.localStorage.getItem('token')

const App = () => {
  if (!token) {
    navigate('/', { replace: true })
    return <Home />
  }
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard/*" />
      <ExamenToPrint path="test-print" />
      <NotFound2 default />
    </Router>
  )
}
export default App
