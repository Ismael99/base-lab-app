import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { Modal } from '../../../../components/Modal'
import {
  setCurrentPaciente,
  deletePaciente
} from '../../../../redux/actions/pacientesAction'

const pacientesSelector = createSelector(
  (state) => state.pacientes.data,
  (data) => data.filter((paciente) => paciente.paciente_status !== 2)
)

export const PacienteDelete = ({ id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }
  const pacientes = useSelector(pacientesSelector)
  const pacienteToDelete = pacientes.find(
    (paciente) => paciente.paciente_id.toString() === id
  )
  useEffect(() => {
    dispatch(setCurrentPaciente(pacienteToDelete))
  }, [dispatch, pacienteToDelete])

  return (
    <Modal
      content="¿Está seguro que desea eliminar el registro?"
      isOpen={true}
      title="Eliminar Paciente"
      module="pacientes"
      toDispatch={deletePaciente}
      onAction={handleNavigate}
      onClose={handleNavigate}
      type="delete"
    />
  )
}
