import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { RolesSchema } from '../../../../schema'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'selector'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFetchRoles } from '.././../../../redux/actions/rolesActions'

const rolesSelector = createSelector(
  (state) => (state.roles.data ? state.roles.data : []),
  (data) => data.filter((role) => role.role_status !== 2)
)

export const RolesHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const roles = useSelector(rolesSelector)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchRoles)
      setLoading(false)
    }
    fetch()
  }, [dispatch])
  if (loading) return <LoaderPage />
  return (
    <>
      <Table
        headers={RolesSchema.tableHeaders}
        data={roles}
        keys={RolesSchema.keys}
        idKey="role_id"
        addActions={false}
      />
    </>
  )
}
