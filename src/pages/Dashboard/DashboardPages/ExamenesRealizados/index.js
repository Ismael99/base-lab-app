import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { ExamenRealizadoEdit } from './ExamenRealizadoEdit'
import { ExamenesOrdenView } from './ExamenesOrdenView'
import { ExamenRealizadoDetail } from './ExamenRealizadoDetail'
import {
  thunkFetchExamenesRealizados,
  updateExamenRealizado
} from '../../../../redux/actions/examenesRealizadosActions'
import { thunkFetchOrdenesExamenes } from '../../../../redux/actions/ordenesExamenesActions'
import { thunkFetchOrdenesExamenesStatus } from '../../../../redux/actions/ordenesExamenesStatusActions'
import { thunkFetchExamenes } from '../../../../redux/actions/examenesAction'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
import { thunkFetchQuimicos } from '../../../../redux/actions/quimicosAction'
import { thunkFetchExamenesTemplete } from '../../../../redux/actions/examenesTemplateActions'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'

export const ExamenesRealizados = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchExamenesRealizados)
      await dispatch(thunkFetchPacientes)
      await dispatch(thunkFetchOrdenesExamenes)
      await dispatch(thunkFetchExamenes)
      await dispatch(thunkFetchOrdenesExamenesStatus)
      await dispatch(thunkFetchQuimicos)
      await dispatch(thunkFetchExamenesTemplete)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => setMounted(false)
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
  else {
    return (
      <DashboardSection>
        <DashboardSectionTitle title="Examenes Realizados" />
        <DashboardSectionContent>
          <Router>
            <ExamenRealizadoEdit
              path="resultados/:id"
              toDispatch={updateExamenRealizado}
            />
            <ExamenesOrdenView path="examenes/:id" />
            <ExamenRealizadoDetail path="resultados/view/:id" />
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
