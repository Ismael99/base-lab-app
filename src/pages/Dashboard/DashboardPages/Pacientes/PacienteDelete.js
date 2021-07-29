import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../../../components/Modal'
import {
  setCurrentPaciente,
  deletePaciente
} from '../../../../redux/actions/pacientesAction'

export const PacienteDelete = ({ id, pacientes }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }

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
