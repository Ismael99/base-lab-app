import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { Profile } from '../../../../components/Profile'

const loggedSelector = createSelector((state) => state.login.user)
const roleSelector = createSelector((state, role_id) => state.roles.data)

export const Me = ({ currentPath }) => {
  const user = useSelector(loggedSelector)
  // TODO: hacer fetch de los roles
  const role = useSelector(roleSelector)

  return <Profile user={user} role={role} path={currentPath} />
}
