import React, { useState, useEffect } from 'react'
import { PacienteSchema } from '../../../../schema'
import { PacientesForm } from './PacientesForm'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'

const pacientesSelector = createSelector(
  (state) => state.pacientes.data,
  (data) => data.filter((paciente) => paciente.paciente_status)
)

export const PacienteEdit = ({ id, ...props }) => {
  const pacientes = useSelector(pacientesSelector)
  const pacienteToEdit = id
    ? pacientes.find((paciente) => paciente.paciente_id.toString() === id)
    : PacienteSchema.initialValues
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
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
    <PacientesForm
      paciente={pacienteToEdit}
      isInterfaceView={false}
      {...props}
    />
  )
}
