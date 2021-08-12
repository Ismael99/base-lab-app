import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { ExamenSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchExamenes } from '../../../../redux/actions/examenesAction'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
const examenesSelector = createSelector(
  (state) => (state.examenes.data ? state.examenes.data : []),
  (data) => data.filter((examen) => examen.examen_status !== 2)
)

export const ExamenesHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const examenes = useSelector(examenesSelector)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchExamenes)
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
        headers={ExamenSchema.tableHeaders}
        data={examenes}
        keys={ExamenSchema.keys}
        idKey="examen_id"
      />
    </>
  )
}
