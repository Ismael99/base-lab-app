import { client } from '../../api'
import { ROLES_ACTIONS } from './types'

const resource = 'roles'

export const thunkFetchRoles = async (dispatch, _) => {
  const roles = await client.get({ resource: resource })
  await dispatch({
    type: ROLES_ACTIONS.FETCH_ROLES,
    payload: roles
  })
}
