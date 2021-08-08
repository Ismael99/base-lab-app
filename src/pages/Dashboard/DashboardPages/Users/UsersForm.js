import React from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'
import { setCurrentUser } from '../../../../redux/actions/usersActions'
export const UsersForm = ({ users, id, isInterfaceView, ...props }) => {
  let userCurrent = users?.find((user) => {
    return user.user_id.toString() === id
  })
  userCurrent = userCurrent ? userCurrent : UserSchema.initialValues
  console.log(id, userCurrent)
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
