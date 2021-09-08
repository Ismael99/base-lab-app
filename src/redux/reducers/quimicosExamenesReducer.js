import { QUIMICOS_EXAMENES_ACTIONS } from '../actions/types'

const INITIAL_STATE = { data: [], current: {} }

export const quimicosExamenesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUIMICOS_EXAMENES_ACTIONS.FETCH_QUIMICOS_EXAMENES: {
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
