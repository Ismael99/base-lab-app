import { EXAMENES_REALIZADOS_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const examenesRealizadosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMENES_REALIZADOS_ACTIONS.FETCH_EXAMENES_REALIZADOS: {
      return { ...state, data: action.payload }
    }
    case EXAMENES_REALIZADOS_ACTIONS.UPDATE_EXAMEN_REALIZADO: {
      return {
        ...state,
        data: state.data.map((examen_realizado) => {
          return examen_realizado.examen_realizado_id ===
            action.payload?.examen_realizado_id ?? undefined
            ? action.payload
            : examen_realizado
        })
      }
    }
    case EXAMENES_REALIZADOS_ACTIONS.SAVE_EXAMEN_REALIZADO: {
      const newExamenRealizadoData = [...(state.data ?? []), action.payload]
      return { ...state, data: newExamenRealizadoData }
    }
    case EXAMENES_REALIZADOS_ACTIONS.SET_CURRENT_EXAMEN_REALIZADO: {
      return { ...state, current: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
