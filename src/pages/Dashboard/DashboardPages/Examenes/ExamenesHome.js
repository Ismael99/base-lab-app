import React from 'react'
import { Table } from '../../../../components/Table'
import { ExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector } from 'react-redux'
const examenesSelector = createSelector(
  (state) => state.examenes.data ?? [],
  (data) => data.filter((examen) => examen.examen_status !== 2)
)

export const ExamenesHome = () => {
  const examenes = useSelector(examenesSelector)
  return (
    <>
      <Table
        headers={ExamenSchema.tableHeaders}
        data={examenes}
        keys={ExamenSchema.keys}
        idKey="examen_id"
      />
    </>
  )
}
