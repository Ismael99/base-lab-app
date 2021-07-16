import React from 'react'
import { Table } from '../../../../components/Table'
import { UserSchema } from '../../../../schema'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
export const UsersHome = () => {
  const userSelector = createSelector(
    (state) => state.users.data,
    (data) => data.filter((user) => user.user_status !== 2)
  )
  const users = useSelector(userSelector)
  console.log(users)
  return (
    <>
      <Table
        headers={UserSchema.tableHeaders}
        data={users}
        keys={UserSchema.keys}
        idKey="user_id"
      />
    </>
  )
}
