import { client } from '../../api'
import { ROLES_ACTIONS } from './types'

const resource = 'roles'
/*
export const thunkFetchRoles = async (dispatch, _) => {
  const roles = await client.get({ resource: resource })

  await dispatch({
    type: ROLES_ACTIONS.FETCH_ROLES,
    payload: roles
  })
}
    */
export const thunkFetchRoles = (dispatch, _) => {
  client.get({ resource: resource }).then((roles_get) => {
    dispatch({
      type: ROLES_ACTIONS.FETCH_ROLES,
      payload: roles_get
    })
  })
}

export const thunkFecthRole = (id) => (dispatch, _) => {
  client.get({ resource: `${resource}/${id}` }).then((role) => {
    dispatch({
      type: ROLES_ACTIONS.FETCH_ROLE,
      payload: role
    })
  })
}
