import { PACIENTES_ACTIONS } from '../actions/types'
const INITIAL_STATE = { data: [], current: {} }

export const pacientesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PACIENTES_ACTIONS.FETCH_PACIENTES: {
      return { ...state, data: action.payload }
    }
    case PACIENTES_ACTIONS.UPDATE_PACIENTE: {
      return {
        ...state,
        data: state.data.map((paciente) => {
          return paciente.paciente_id === action.payload.paciente_id
            ? action.payload
            : paciente
        })
      }
    }
    case PACIENTES_ACTIONS.SAVE_PACIENTE: {
      const newPacienteData = [...state.data, action.payload]
      return { ...state, data: newPacienteData }
    }
    case PACIENTES_ACTIONS.SET_CURRENT_PACIENTE: {
      return { ...state, current: action.payload }
    }
    case PACIENTES_ACTIONS.DELETE_PACIENTE: {
      return {
        ...state,
        data: state.data.map((paciente) => {
          return paciente.paciente_id === action.payload.paciente_id
            ? { ...paciente, paciente_status: 2 }
            : paciente
        })
      }
    }
    default: {
      return { ...state }
    }
  }
}
