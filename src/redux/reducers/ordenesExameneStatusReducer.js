import { ORDENES_EXAMENES_STATUS_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const ordenesExamenesStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDENES_EXAMENES_STATUS_ACTIONS.FETCH_ORDENES_EXAMENES_STATUS: {
      return { ...state, data: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
