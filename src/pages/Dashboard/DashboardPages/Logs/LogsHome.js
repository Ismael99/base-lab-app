import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { LogsSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFetchLogs } from '../../../../redux/actions/logsActions'
import {thunkFecthUsers} from '../../../../redux/actions/usersActions'
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

const usersSelector = createSelector(
  (state) => (state.users.data ?? [])
)

export const LogsHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const logs = useSelector(logsSelector)
  const users = useSelector(usersSelector)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchLogs)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [mounted, dispatch])

  if (loading) return <LoaderPage />
  // pivot variable
  const logsUsernames = logs.map((log) => ( {
    ...log, 
    log_user: users.find((user) => ( log.log_user === user.user_id)).user_name 
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
