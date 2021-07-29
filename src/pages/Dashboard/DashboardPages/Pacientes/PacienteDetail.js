import React, { useEffect, useState } from 'react'
import { PacientesForm } from './PacientesForm'
import { createSelector } from 'selector'
import { useSelector, useDispatch } from 'react-redux'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
import { thunkFetchPacientes } from '../../../../redux/actions/pacientesAction'
const pacientesSelector = createSelector(
  (state) => state.pacientes.data,
  (data) => data.filter((paciente) => paciente.paciente_status !== 2)
)
export const PacienteDetail = ({ id }) => {
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
  const pacientes = useSelector(pacientesSelector)
  if (loading) return <LoaderPage />
  console.log(pacientes)
  const PacienteToView = pacientes.find((paciente) => {
    return paciente.paciente_id.toString() === id
  })
  return <PacientesForm paciente={PacienteToView} isInterfaceView={true} />
}
