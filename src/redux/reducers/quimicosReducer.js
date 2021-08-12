import { QUIMICOS_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const quimicosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUIMICOS_ACTIONS.FETCH_QUIMICOS: {
      return { ...state, data: action.payload }
    }
    case QUIMICOS_ACTIONS.UPDATE_QUIMICO: {
      return {
        ...state,
        data: state.data.map((quimico) => {
          return quimico.quimico_id === action.payload.quimico_id
            ? action.payload
            : quimico
        })
      }
    }
    case QUIMICOS_ACTIONS.SAVE_QUIMICO: {
      const newQuimicoData = [...state.data, action.payload]
      return { ...state, data: newQuimicoData }
    }
    case QUIMICOS_ACTIONS.SET_CURRENT_QUIMICO: {
      return { ...state, current: action.payload }
    }
    case QUIMICOS_ACTIONS.DELETE_QUIMICOS: {
      return {
        ...state,
        data: state.data.map((quimico) => {
          return quimico.quimico_id === action.payload.quimico_id
            ? { ...quimico, quimico_status: 2 }
            : quimico
        })
      }
    }
    default: {
      return { state }
    }
  }
}
