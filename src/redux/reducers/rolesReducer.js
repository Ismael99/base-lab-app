import { ROLES_ACTIONS } from '../actions/types'

const INITIAL_STATE = { data: [] }

export const rolesReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case ROLES_ACTIONS.FETCH_ROLES: {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return {
        state
      }
    }
  }
}
