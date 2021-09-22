import { LOGIN_ACTIONS} from '../actions/types'
const INITIAL_STATE = { user: {} }

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_ACTIONS.LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }
      
    default: return {...state}
  }
}