import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { OrdenesExamenesHome } from './OrdenesExamenesHome'
import { OrdenExamenNew } from './OrdenExamenNew'
import { OrdenExamenDetail } from './OrdenesExamenesDetail'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import {
  thunkFetchOrdenesExamenes,
  saveOrdenExamen
} from '../../../../redux/actions/ordenesExamenesActions'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
import { thunkFetchExamenes } from '../../../../redux/actions/examenesAction'
import { thunkFetchExamenesRealizados } from '../../../../redux/actions/examenesRealizadosActions'
import { thunkFetchOrdenesExamenesStatus } from '../../../../redux/actions/ordenesExamenesStatusActions'

export const OrdenesExamenes = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchPacientes)
      await dispatch(thunkFetchOrdenesExamenes)
      await dispatch(thunkFetchExamenes)
      await dispatch(thunkFetchExamenesRealizados)
      await dispatch(thunkFetchOrdenesExamenesStatus)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => setMounted(false)
  }, [mounted, dispatch])
  if (loading) return <LoaderPage />
  else {
    return (
      <DashboardSection>
        <DashboardSectionTitle title="Ordenes Examenes" />
        <DashboardSectionContent>
          <Router>
            <OrdenesExamenesHome path="/" title="Ver" />
            <OrdenExamenNew path="create" toDispatch={saveOrdenExamen} />
            <OrdenExamenDetail path="view/:id" />
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
