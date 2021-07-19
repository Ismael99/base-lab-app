import React from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'
import { setCurrentUser } from '../../../../redux/actions/usersActions'
export const UsersForm = ({ user, isInterfaceView, ...props }) => {
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={user}
      schema={UserSchema}
      setCurrent={setCurrentUser}
      currentPath="users"
      {...props}
    />
  )
}
