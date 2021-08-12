import { client } from '../../api'
import { QUIMICOS_ACTIONS } from './types'

const resource = 'quimicos'

export const fetchQuimicos = (quimicos) => ({
  type: QUIMICOS_ACTIONS.FETCH_QUIMICOS,
  payload: quimicos
})

export const thunkFetchQuimicos = async (dispatch, _) => {
  const quimicos = await client.get({ resource: resource })
  await dispatch({
    type: QUIMICOS_ACTIONS.FETCH_QUIMICOS,
    payload: quimicos
  }) 
}

export const saveQuimico = async (dispatch, getState) => {
  let state = getState()
  const quimicoData = state.quimicos.current
  console.log("saveQuimico")
  const newQuimico = await client.post({
    resource: resource,
    body: quimicoData 
  })
  dispatch({ type: QUIMICOS_ACTIONS.SAVE_QUIMICO, payload: newQuimico })
}

export const updateQuimico = async (dispatch, getState) => {
  const state = getState()
  const quimicoData = state.quimicos.current
  const updateQuimico = await client.put({
    resource: resource,
    body: quimicoData
  })
  dispatch({ type: QUIMICOS_ACTIONS.UPDATE_QUIMICO, payload: updateQuimico })
}

export const deleteQuimico = async (dispatch, getState) => {
  let state = getState()
  const quimicoData = state.quimicos.current
  const deleteQuimico = await client.delete({
    resource: resource,
    body: quimicoData
  })
  dispatch({ type: QUIMICOS_ACTIONS.DELETE_QUIMICOS, payload: deleteQuimico })
}

export const setCurrentQuimico = (quimico) => ({
  type: QUIMICOS_ACTIONS.SET_CURRENT_QUIMICO,
  payload: quimico
})
