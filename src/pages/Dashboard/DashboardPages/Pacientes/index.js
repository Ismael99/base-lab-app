import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { PacientesHome } from './PacientesHome'
import { PacienteDetail } from './PacienteDetail'
import { PacienteEdit } from './PacienteEdit'
import { PacienteDelete } from './PacienteDelete'
import { PacienteNew } from './PacienteNew'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
import { useDispatch } from 'react-redux'
import { NotFound } from '../../../SiteStatus/NotFound'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import {
  savePaciente,
  updatePaciente
} from '../../../../redux/actions/pacientesAction'

export const Pacientes = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchPacientes)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => setMounted(false)
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
  else {
    return (
      <DashboardSection>
        <DashboardSectionTitle title="Pacientes" />
        <DashboardSectionContent>
          <Router>
            <PacientesHome path="/" title="Ver" />
            <PacienteDetail path="view/:id" />
            <PacienteNew path="create" toDispatch={savePaciente} />
            <PacienteEdit toDispatch={updatePaciente} path="edit/:id" />
            <PacienteDelete path="delete/:id" />
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
