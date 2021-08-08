import React from 'react'
import { UsersForm } from './UsersForm'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'

const usersSelector = createSelector(
  //la diferencia esta en ese : [], por ese ahora funciona y no da error de indefinido...
  (state) => (state.users.data ? state.users.data : []),
  (data) => data.filter((user) => user.user_status !== 2)
)

export const UserEdit = ({ id, ...props }) => {
  const users = useSelector(usersSelector)

  return <UsersForm id={id} users={users} isInterfaceView={false} {...props} />
}
