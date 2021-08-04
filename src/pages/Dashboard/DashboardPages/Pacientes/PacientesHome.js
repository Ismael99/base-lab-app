import React, { useState, useEffect } from 'react'
import { Table } from '../../../../components/Table'
import { PacienteSchema } from '../../../../schema'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
const pacientesSelector = createSelector(
  (state) => (state.pacientes.data ? state.pacientes.data : []),
  (data) => data.filter((paciente) => paciente.paciente_status !== 2)
)

export const PacientesHome = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const pacientes = useSelector(pacientesSelector)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchPacientes)
      setLoading(false)
    }
    fetch()
  }, [dispatch])
  if (loading) return <LoaderPage />
  return (
    <>
      <Table
        headers={PacienteSchema.tableHeaders}
        data={pacientes}
        keys={PacienteSchema.keys}
        idKey="paciente_id"
      />
    </>
  )
}
