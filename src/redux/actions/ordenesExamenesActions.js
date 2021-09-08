import { client } from '../../api'
import { ORDENES_EXAMENES_ACTIONS } from './types'

const resource = 'ordenes_examenes'

export const fetchExamenes = (ordenes_examenes) => ({
  type: ORDENES_EXAMENES_ACTIONS.FETCH_ORDENES_EXAMENES,
  payload: ordenes_examenes
})

export const thunkFetchOrdenesExamenes = async (dispatch, _) => {
  const ordenes_examenes = await client.get({ resource: resource })
  console.log({ ordenes_examenes })
  debugger
  await dispatch({
    type: ORDENES_EXAMENES_ACTIONS.FETCH_ORDENES_EXAMENES,
    payload: ordenes_examenes
  })
}

export const saveOrdenExamen = async (dispatch, getState) => {
  let state = getState()
  const ordenExamenData = state.ordenes_examenes.current
  const newOrdenExamen = await client.post({
    resource: resource,
    body: ordenExamenData
  })
  dispatch({
    type: ORDENES_EXAMENES_ACTIONS.SAVE_ORDEN_EXAMEN,
    payload: newOrdenExamen
  })
}

export const updateOrdenExamen = async (dispatch, getState) => {
  const state = getState()
  const ordenExamenData = state.ordenes_examenes.current
  const updateOrdenExamen = await client.put({
    resource: resource,
    body: ordenExamenData
  })
  console.log(updateOrdenExamen)
  dispatch({
    type: ORDENES_EXAMENES_ACTIONS.UPDATE_ORDEN_EXAMEN,
    payload: updateOrdenExamen
  })
}

export const deleteOrdenExamen = async (dispatch, getState) => {
  let state = getState()
  const ordenExamenData = state.ordenes_examenes.current
  const deleteOrdenExamen = await client.delete({
    resource: resource,
    body: ordenExamenData
  })

  dispatch({
    type: ORDENES_EXAMENES_ACTIONS.DELETE_ORDEN_EXAMEN,
    payload: deleteOrdenExamen
  })
}

export const setCurrentOrdenExamen = (orden_examen) => ({
  type: ORDENES_EXAMENES_ACTIONS.SET_CURRENT_ORDEN_EXAMEN,
  payload: orden_examen
})
