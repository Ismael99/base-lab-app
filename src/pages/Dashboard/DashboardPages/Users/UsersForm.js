import React from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'
import { setCurrentUser } from '../../../../redux/actions/usersActions'
export const UsersForm = ({ users, id, isInterfaceView, ...props }) => {
  let userCurrent = users?.find((user) => {
    return user.user_id.toString() === id
  })
  userCurrent = userCurrent ?? UserSchema.initialValues
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={userCurrent}
      schema={UserSchema}
      setCurrent={setCurrentUser}
      currentPath="users"
      {...props}
    />
  )
}
