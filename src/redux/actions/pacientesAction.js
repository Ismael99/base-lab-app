import { client } from '../../api'
import { PACIENTES_ACTIONS } from './types'

const resource = 'pacientes'

export const fetchPacientes = (pacientes) => ({
  type: PACIENTES_ACTIONS.FETCH_PACIENTES,
  payload: pacientes
})

export const thunkFetchPacientes = async (dispatch, _) => {
  const pacientes = await client.get({ resouce: resource })
  await dispatch({
    type: PACIENTES_ACTIONS.FETCH_PACIENTES,
    payload: pacientes
  })
}

export const savePaciente = async (dispatch, getState) => {
  let state = getState()
  const pacienteData = state.pacientes.current
  const newPaciente = await client.post({
    resource: resource,
    body: pacienteData
  })
  dispatch({ type: PACIENTES_ACTIONS.SAVE_PACIENTE, payload: newPaciente })
}

export const updatePaciente = async (dispatch, getState) => {
  const state = getState()
  const pacienteData = state.pacientes.current
  const updatePaciente = await client.put({
    resource: resource,
    body: pacienteData
  })
  dispatch({ type: PACIENTES_ACTIONS.UPDATE_PACIENTE, payload: updatePaciente })
}

export const deletePaciente = async (dispatch, getState) => {
  let state = getState()
  const pacienteData = state.pacientes.current
  const deletePaciente = await client.delete({
    resource: resource,
    body: pacienteData
  })
  dispatch({ type: PACIENTES_ACTIONS.DELETE_PACIENTE, payload: deletePaciente })
}

export const setCurrentPaciente = (paciente) => ({
  type: PACIENTES_ACTIONS.SET_CURRENT_PACIENTE,
  payload: paciente
})
