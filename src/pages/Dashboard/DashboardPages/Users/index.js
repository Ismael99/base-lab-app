import React, { useState, useEffect } from 'react'
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
import { thunkFetchRecordsStatus } from '../../../../redux/actions/recordsStatusAction'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'

const usersSelector = createSelector(
  (state) => state.users.data,
  (data) => data.filter((user) => user.user_status !== 2)
)
const tokenSelector = createSelector((state) => state.users.token)

export const Users = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchRecordsStatus)
      setLoading(false)
    }
    fetch()
  }, [dispatch])
  const users = useSelector(usersSelector)
  const token = useSelector(tokenSelector)
  if (loading) return <LoaderPage />
  return (
    <DashboardSection>
      <DashboardSectionTitle title="Usuarios" />
      <DashboardSectionContent>
        <Router>
          <UsersHome users={users} path="/" title="Ver" />
          <UserNew
            path="create"
            toDispatch={saveUser}
           />
          <UserEdit
            path="edit/:id"
            users={users}
            toDispatch={updateUser}
            isUpdate={true}
           />
          <UserDelete path="delete/:id" users={users} />
          <UserDetail
            path="view/:id"
            users={users}
           />
          <NotFound default />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
