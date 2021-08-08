import React from 'react'
import { UsersForm } from './UsersForm'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const usersSelector = createSelector(
  (state) => (state.users.data ? state.users.data : []),
  (data) => data.filter((user) => user.user_status !== 2)
)

export const UserDetail = ({ id }) => {
  const users = useSelector(usersSelector)
  console.log('User Detail')
  return <UsersForm users={users} id={id} isInterfaceView={true} />
}
