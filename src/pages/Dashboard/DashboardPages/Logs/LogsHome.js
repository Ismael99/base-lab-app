import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { LogsSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFetchLogs } from '../../../../redux/actions/logsActions'

const logsSelector = createSelector(
  (state) => (state.logs.data ? state.logs.data : []),
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.paciente_created_at > b.paciente_created_at) {
        return -1
      } else {
        return 1
      }
    })
)

export const LogsHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const logs = useSelector(logsSelector)
  console.log(logs)
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
  return (
    <>
      <Table
        headers={LogsSchema.tableHeaders}
        data={logs}
        keys={LogsSchema.keys}
        idKey="log_id"
        addActions={true}
        actionType="logs"
      />
    </>
  )
}
