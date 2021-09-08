import React from 'react'
import { Table } from '../../../../components/Table'
import { UserSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const usersSelector = createSelector(
  (state) => (state.users.data ? state.users.data : []),
  (data) => data.filter((user) => user.user_state !== 2),
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.user_updated_at > b.user_updated_at) {
        return -1
      } else {
        return 1
      }
    })
)

export const UsersHome = () => {
  const users = useSelector(usersSelector)
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
