import React from 'react'
import { Router } from '@reach/router'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NotFound2 } from './pages/SiteStatus/NotFound2'
import ExamenToPrint from './components/ExamenToPrint'

const App = () => (
  <Router>
    <Home path="/" />
    <Dashboard path="dashboard/*" />
    <ExamenToPrint path="test-print" />
    <NotFound2 default />
  </Router>
)

export default App
