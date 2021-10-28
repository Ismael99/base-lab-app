import { ROLES_ACTIONS } from '../actions/types'

const INITIAL_STATE = { data: [], roleUser: {} }

export const rolesReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type, ROLES_ACTIONS.FETCH_ROLES)
  switch (action.type) {
    case ROLES_ACTIONS.FETCH_ROLES: {
      return {
        ...state,
        data: action.payload
      }
    }

    case ROLES_ACTIONS.FETCH_ROLE:
      return {
        ...state,
        roleUser: action.payload
      }

    default: {
      return {
        ...state
      }
    }
  }
}
