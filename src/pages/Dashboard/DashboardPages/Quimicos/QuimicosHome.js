import React from 'react'
import { Table } from '../../../../components/Table'
import { QuimicoSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const quimicosSelector = createSelector(
  (state) => (state.quimicos.data ? state.quimicos.data : []),
  (data) => data.filter((quimico) => quimico.quimico_status !== 2)
)

export const QuimicosHome = () => {
  const quimicos = useSelector(quimicosSelector)
  return (
    <>
      <Table
        headers={QuimicoSchema.tableHeaders}
        data={quimicos}
        keys={QuimicoSchema.keys}
        idKey="quimico_id"
      />
    </>
  )
}
