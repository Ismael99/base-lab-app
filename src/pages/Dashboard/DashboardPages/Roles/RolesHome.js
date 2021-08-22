import React from 'react'
import { Table } from '../../../../components/Table'
import { RolesSchema } from '../../../../schema'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const rolesSelector = createSelector(
  (state) => (state.roles.data ? state.roles.data : []),
  (data) => data.filter((role) => role.role_status !== 2),
  (data_sort) =>
    data_sort.sort((a, b) => {
      if (a.rol_updated_at > b.rol_updated_at) {
        return -1
      } else {
        return 1
      }
    })
)

export const RolesHome = () => {
  const roles = useSelector(rolesSelector)
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
