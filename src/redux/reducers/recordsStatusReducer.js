import { RECORD_STATUS_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [] }

export const recordsStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECORD_STATUS_ACTIONS.FETCH_RECORD_STATUS: {
      return { ...state, data: action.payload }
    }
    default: {
      return { state }
    }
  }
}
