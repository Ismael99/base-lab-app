import React, { useEffect, useState } from 'react'
import { Table } from '../../../../components/Table'
import { UserSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFecthUsers } from '../../../../redux/actions/usersActions'
import { thunkFetchRecordsStatus } from '../../../../redux/actions/recordsStatusAction'
const usersSelector = createSelector(
  (state) => (state.users.data ? state.users.data : []),
  (data) => data.filter((user) => user.user_state !== 2)
)

export const UsersHome = () => {
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const users = useSelector(usersSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFecthUsers)
      await dispatch(thunkFetchRecordsStatus)
      setLoading(false)
    }
    if (mounted) fetch()
    return () => {
      setMounted(false)
    }
  }, [dispatch, mounted])
  if (loading) return <LoaderPage />
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
