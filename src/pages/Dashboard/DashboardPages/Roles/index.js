import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { RolesHome } from './RolesHome'
import { thunkFetchRoles } from '../../../../redux/actions/rolesActions'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'

export const Roles = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchRoles)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [dispatch])
  if (loading) return <LoaderPage />
  return (
    <DashboardSection>
      <DashboardSectionTitle title="Roles" />
      <DashboardSectionContent>
        <Router>
          <RolesHome path="/" title="Ver" />
          <NotFound default />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
