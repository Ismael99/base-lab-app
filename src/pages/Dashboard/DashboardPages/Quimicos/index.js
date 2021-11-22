import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { QuimicosHome } from './QuimicosHome'
import { QuimicoDetail } from './QuimicosDetail'
import { QuimicoEdit } from './QuimicosEdit'
import { QuimicoDelete } from './QuimicosDelete'
import { QuimicoNew } from './QuimicosNew'
import { thunkFetchQuimicos } from '../../../../redux/actions/quimicosAction'
import { thunkFetchRecordsStatus } from '../../../../redux/actions/recordsStatusAction'
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
      setLoading(true)
      await dispatch(thunkFetchQuimicos)
      await dispatch(thunkFetchRecordsStatus)
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
            <QuimicoDetail path="view/:id" />
            <QuimicoNew path="create" toDispatch={saveQuimico} />
            <QuimicoEdit toDispatch={updateQuimico} path="edit/:id" />
            <QuimicoDelete path="delete/:id" />
            <NotFound default />
          </Router>
        </DashboardSectionContent>
      </DashboardSection>
    )
  }
}
