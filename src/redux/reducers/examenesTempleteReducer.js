import { EXAMENES_TEMPLETE_ACTIONS } from '../actions/types'

const INITIAL_STATE = { data: [], current: {} }

export const examenesTempleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMENES_TEMPLETE_ACTIONS.FETCH_EXAMENES_TEMPLETE: {
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
