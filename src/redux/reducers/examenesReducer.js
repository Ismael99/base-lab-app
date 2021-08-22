import { EXAMENES_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const examenesReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type, EXAMENES_ACTIONS.FETCH_EXAMENES)
  switch (action.type) {
    case EXAMENES_ACTIONS.FETCH_EXAMENES: {
      return { ...state, data: action.payload }
    }
    case EXAMENES_ACTIONS.UPDATE_EXAMEN: {
      return {
        ...state,
        data: state.data.map((examen) => {
          return examen.examen_id === action.payload.examen_id
            ? action.payload
            : examen
        })
      }
    }
    case EXAMENES_ACTIONS.SAVE_EXAMEN: {
      const newExamenData = [...(state.data ?? []), action.payload]
      return { ...state, data: newExamenData }
    }
    case EXAMENES_ACTIONS.SET_CURRENT_EXAMEN: {
      return { ...state, current: action.payload }
    }
    case EXAMENES_ACTIONS.DELETE_EXAMENES: {
      return {
        ...state,
        data: state.data.map((examen) => {
          return examen.examen_id === action.payload.examen_id
            ? { ...examen, examen_status: 2 }
            : examen
        })
      }
    }
    default: {
      return { ...state }
    }
  }
}
