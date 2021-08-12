import { LOGS_ACTIONS } from '../actions/types'

const INITIAL_STATE = { data: [], current: {} }

export const logsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGS_ACTIONS.FETCH_LOGS: {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
