import React from 'react'
import { UsersForm } from './UsersForm'

export const UserDetail = ({ id, users, recordsStatus }) => {
  const userToView = users.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )
  console.log('User Detail')
  return (
    <UsersForm
      user={userToView}
      isInterfaceView={true}
      recordsStatus={recordsStatus}
    />
  )
}
