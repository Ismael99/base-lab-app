import React from 'react'
import { Table } from '../../../../components/Table'
import { LogsSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const logsSelector = createSelector(
  (state) => (state.logs.data ? state.logs.data : []),
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.log_updated_at > b.log_updated_at) {
        return -1
      } else {
        return 1
      }
    })
)
const usersSelector = createSelector((state) => state.users.data ?? [])

export const LogsHome = () => {
  const logs = useSelector(logsSelector)
  const users = useSelector(usersSelector)
  // pivot variable
  const logsUsernames = logs.map((log) => ({
    ...log,
    log_user: users.find((user) => log.log_user === user.user_id).user_name
  }))

  return (
    <>
      <Table
        headers={LogsSchema.tableHeaders}
        data={logsUsernames}
        keys={LogsSchema.keys}
        idKey="log_id"
        addActions={true}
        actionType="logs"
      />
    </>
  )
}
