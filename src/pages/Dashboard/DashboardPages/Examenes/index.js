import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { ExamenesHome } from './ExamenesHome'
import { ExamenDetail } from './ExamenesDetail'
import { ExamenEdit } from './ExamenesEdit'
import { ExamenDelete } from './ExamenDelete'
import { ExamenNew } from './ExamenesNew'
import { thunkFetchExamenes } from '../../../../redux/actions/examenesAction'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import {
  saveExamen,
  updateExamen
} from '../../../../redux/actions/examenesAction'

export const Examenes = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      console.log('Fetching de datos')
      setLoading(true)
      await dispatch(thunkFetchExamenes)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => setMounted(false)
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
  else {
    return (
      <DashboardSection>
        <DashboardSectionTitle title="Examenes" />
        <DashboardSectionContent>
          <Router>
            <ExamenesHome path="/" title="Ver" />
            <ExamenDetail path="view/:id" />
            <ExamenNew path="create" toDispatch={saveExamen} />
            <ExamenEdit toDispatch={updateExamen} path="edit/:id" />
            <ExamenDelete path="delete/:id" />
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
