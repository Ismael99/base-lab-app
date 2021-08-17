import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { QuimicoSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchQuimicos } from '../../../../redux/actions/quimicosAction'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
const quimicosSelector = createSelector(
  (state) => (state.quimicos.data ? state.quimicos.data : []),
  (data) => data.filter((quimico) => quimico.quimico_status !== 2)
)

export const QuimicosHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const quimicos = useSelector(quimicosSelector)
  console.log(quimicos)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchQuimicos)
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
        headers={QuimicoSchema.tableHeaders}
        data={quimicos}
        keys={QuimicoSchema.keys}
        idKey="quimico_id"
      />
    </>
  )
}
