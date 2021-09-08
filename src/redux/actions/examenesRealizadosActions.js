import { client } from '../../api'
import { EXAMENES_REALIZADOS_ACTIONS } from './types'

const resource = 'examenes_realizados'

export const fetchExamenesRealizados = (examenes_realizados) => ({
  type: EXAMENES_REALIZADOS_ACTIONS.FETCH_EXAMENES_REALIZADOS,
  payload: examenes_realizados
})

export const thunkFetchExamenesRealizados = async (dispatch, _) => {
  const examenes_realizados = await client.get({ resource: resource })
  console.log({ examenes_realizados })
  console.log('Resultado del fetch examenes realizados:')
  console.log({ examenes_realizados })
  await dispatch({
    type: EXAMENES_REALIZADOS_ACTIONS.FETCH_EXAMENES_REALIZADOS,
    payload: examenes_realizados
  })
}

export const saveExamenRealizado = async (dispatch, getState) => {
  let state = getState()
  const examenRealizadoData = state.examenes_realizados.current
  const newExamenRealizado = await client.post({
    resource: resource,
    body: examenRealizadoData
  })
  dispatch({
    type: EXAMENES_REALIZADOS_ACTIONS.SAVE_EXAMEN_REALIZADO,
    payload: newExamenRealizado
  })
}

export const updateExamenRealizado = async (dispatch, getState) => {
  const state = getState()
  const examenRealizadoData = state.examenes_realizados.current
  const updateExamenRealizado = await client.put({
    resource: resource,
    body: examenRealizadoData
  })
  console.log(updateExamenRealizado)
  dispatch({
    type: EXAMENES_REALIZADOS_ACTIONS.UPDATE_EXAMEN_REALIZADO,
    payload: updateExamenRealizado
  })
}

export const setCurrentExamenRealizado = (examen_realizado) => ({
  type: EXAMENES_REALIZADOS_ACTIONS.SET_CURRENT_EXAMEN_REALIZADO,
  payload: examen_realizado
})
