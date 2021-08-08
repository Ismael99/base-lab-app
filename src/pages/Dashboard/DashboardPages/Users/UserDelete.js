import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useDispatch } from 'react-redux'
import { Modal } from '../../../../components/Modal'
import {
  setCurrentUser,
  deleteUser
} from '../../../../redux/actions/usersActions'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'

const usersSelector = createSelector(
  (state) => (state.users.data ? state.users.data : []),
  (data) => data.filter((user) => user.user_state !== 2)
)

export const UserDelete = ({ id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(usersSelector)
  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }

  const userToDelete = users.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  useEffect(() => {
    // se guarda en el estado el usuario a borrar
    dispatch(setCurrentUser(userToDelete))
  }, [dispatch, userToDelete])

  return (
    <Modal
      content={`¿Esta seguro que desea eliminar el registro?`}
      isOpen={true}
      title="Eliminar Usuario"
      module="users"
      toDispatch={deleteUser}
      onAction={handleNavigate}
      onClose={handleNavigate}
      type="delete"
    />
  )
}
