import { ORDENES_EXAMENES_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const ordenesExamenesReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type, ORDENES_EXAMENES_ACTIONS.FETCH_EXAMENES)
  switch (action.type) {
    case ORDENES_EXAMENES_ACTIONS.FETCH_ORDENES_EXAMENES: {
      return { ...state, data: action.payload }
    }
    case ORDENES_EXAMENES_ACTIONS.UPDATE_ORDEN_EXAMEN: {
      return {
        ...state,
        data: state.data.map((orden_examen) => {
          return orden_examen.orden_exam_id === action.payload.orden_exam_id
            ? action.payload
            : orden_examen
        })
      }
    }
    case ORDENES_EXAMENES_ACTIONS.SAVE_ORDEN_EXAMEN: {
      const newOrdenExamenData = [...(state.data ?? []), action.payload]
      return { ...state, data: newOrdenExamenData }
    }
    case ORDENES_EXAMENES_ACTIONS.SET_CURRENT_ORDEN_EXAMEN: {
      return { ...state, current: action.payload }
    }
    case ORDENES_EXAMENES_ACTIONS.DELETE_ORDEN_EXAMEN: {
      return {
        ...state,
        data: state.data.map((orden_examen) => {
          return orden_examen.orden_exam_id === action.payload.orden_exam_id
            ? { ...orden_examen, orden_exam_status: 2 }
            : orden_examen
        })
      }
    }
    default: {
      return { ...state }
    }
  }
}
