import { client } from '../../api'
import { EXAMENES_ACTIONS } from './types'

const resource = 'examenes'

export const fetchExamenes = (examenes) => ({
  type: EXAMENES_ACTIONS.FETCH_EXAMENES,
  payload: examenes
})

export const thunkFetchExamenes = async (dispatch, _) => {
  const examenes = await client.get({ resource: resource })
  await dispatch({
    type: EXAMENES_ACTIONS.FETCH_EXAMENES,
    payload: examenes
  })
}

export const saveExamen = async (dispatch, getState) => {
  let state = getState()
  const examenData = state.examenes.current
  const newExamen = await client.post({
    resource: resource,
    body: examenData
  })
  dispatch({ type: EXAMENES_ACTIONS.SAVE_EXAMEN, payload: newExamen })
}

export const updateExamen = async (dispatch, getState) => {
  const state = getState()
  const examenData = state.examenes.current
  const updateExamen = await client.put({
    resource: resource,
    body: examenData
  })
  dispatch({ type: EXAMENES_ACTIONS.UPDATE_EXAMEN, payload: updateExamen })
}

export const deleteExamen = async (dispatch, getState) => {
  let state = getState()
  const examenData = state.examenes.current
  const deleteExamen = await client.delete({
    resource: resource,
    body: examenData
  })
  dispatch({ type: EXAMENES_ACTIONS.DELETE_EXAMENES, payload: deleteExamen })
}

export const setCurrentExamen = (examen) => ({
  type: EXAMENES_ACTIONS.SET_CURRENT_EXAMEN,
  payload: examen
})
