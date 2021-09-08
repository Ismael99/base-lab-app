import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { LogsHome } from './LogsHome'
import { thunkFetchLogs } from '../../../../redux/actions/logsActions'
import {thunkFecthUsers} from '../../../../redux/actions/usersActions'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'

export const Logs = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchLogs)
      await dispatch(thunkFecthUsers)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
  return (
    <DashboardSection>
      <DashboardSectionTitle title="Logs" />
      <DashboardSectionContent>
        <Router>
          <LogsHome path="/" title="Ver" />
          <NotFound default />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
