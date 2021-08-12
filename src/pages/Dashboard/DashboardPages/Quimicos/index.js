import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { QuimicosHome } from './QuimicosHome'
//import { ExamenDetail } from './ExamenesDetail'
//import { ExamenEdit } from './ExamenesEdit'
//import { ExamenDelete } from './ExamenDelete'
//import { ExamenNew } from './ExamenesNew'
import { thunkFetchQuimicos } from '../../../../redux/actions/quimicosAction'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import {
  saveQuimico,
  updateQuimico
} from '../../../../redux/actions/quimicosAction'

export const Quimicos = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      console.log('Fetching de datos')
      setLoading(true)
      await dispatch(thunkFetchQuimicos)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => setMounted(false)
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
  else {
    return (
      <DashboardSection>
        <DashboardSectionTitle title="Quimicos" />
        <DashboardSectionContent>
          <Router>
            <QuimicosHome path="/" title="Ver" />
            
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
