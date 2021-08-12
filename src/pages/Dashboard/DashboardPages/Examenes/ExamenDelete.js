import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { Modal } from '../../../../components/Modal'
import {
  setCurrentExamen,
  deleteExamen
} from '../../../../redux/actions/examenesAction'

const examenesSelector = createSelector(
  (state) => (state.examenes.data ? state.examenes.data : []),
  (data) => data.filter((examen) => examen.examen_status !== 2)
)

export const ExamenDelete = ({ id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }
  const examenes = useSelector(examenesSelector)
  const examenToDelete = examenes.find(
    (examen) => examen.examen_id.toString() === id
  )
  useEffect(() => {
    dispatch(setCurrentExamen(examenToDelete))
  }, [dispatch, examenToDelete])

  return (
    <Modal
      content="¿Está seguro que desea eliminar el registro?"
      isOpen={true}
      title="Eliminar Examen"
      module="examenes"
      toDispatch={deleteExamen}
      onAction={handleNavigate}
      onClose={handleNavigate}
      type="delete"
    />
  )
}
