import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { Modal } from '../../../../components/Modal'
import {
  setCurrentQuimico,
  deleteQuimico
} from '../../../../redux/actions/quimicosAction'

const quimicosSelector = createSelector(
  (state) => (state.quimicos.data ? state.quimicos.data : []),
  (data) => data.filter((quimico) => quimico.quimico_status !== 2)
)

export const QuimicoDelete = ({ id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }
  const quimicos = useSelector(quimicosSelector)
  const quimicoToDelete = quimicos.find(
    (quimico) => quimico.quimico_id.toString() === id
  )
  useEffect(() => {
    dispatch(setCurrentQuimico(quimicoToDelete))
  }, [dispatch, quimicoToDelete])

  return (
    <Modal
      content="¿Está seguro que desea eliminar el registro?"
      isOpen={true}
      title="Eliminar quimico"
      module="quimicos"
      toDispatch={deleteQuimico}
      onAction={handleNavigate}
      onClose={handleNavigate}
      type="delete"
    />
  )
}
