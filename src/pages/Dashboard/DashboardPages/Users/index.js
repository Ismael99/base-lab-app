import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'selector'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { UsersHome } from './UsersHome'
import { UserNew } from './UserNew'
import { UserEdit } from './UserEdit'
import { UserDelete } from './UserDelete'
import { UserDetail } from './UsersDetail'
import { NotFound } from '../../../SiteStatus/NotFound'
import { saveUser, updateUser } from '../../../../redux/actions/usersActions'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFecthUsers } from '../../../../redux/actions/usersActions'
import { thunkFetchRecordsStatus } from '../../../../redux/actions/recordsStatusAction'
import { thunkFetchRoles } from '../../../../redux/actions/rolesActions'
const tokenSelector = createSelector((state) => state.users.token)

export const Users = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFecthUsers)
      await dispatch(thunkFetchRecordsStatus)
      await dispatch(thunkFetchRoles)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [mounted, dispatch])
  const token = useSelector(tokenSelector)
  if (loading) return <LoaderPage />
  return (
    <DashboardSection>
      <DashboardSectionTitle title="Usuarios" />
      <DashboardSectionContent>
        <Router>
          <UsersHome path="/" title="Ver" />
          <UserNew path="create" toDispatch={saveUser} />
          <UserEdit path="edit/:id" toDispatch={updateUser} />
          <UserDelete path="delete/:id" />
          <UserDetail path="view/:id" />
          <NotFound default />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
