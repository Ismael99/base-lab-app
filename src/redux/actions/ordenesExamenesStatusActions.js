import { client } from '../../api'
import { ORDENES_EXAMENES_STATUS_ACTIONS } from './types'

const resource = 'ordenes_examenes_status'

export const fetchExamenes = (ordenes_examenes_status) => ({
  type: ORDENES_EXAMENES_STATUS_ACTIONS.FETCH_ORDENES_EXAMENES_STATUS,
  payload: ordenes_examenes_status
})

export const thunkFetchOrdenesExamenesStatus = async (dispatch, _) => {
  const ordenesExamenesStatus = await client.get({ resource: resource })
  await dispatch({
    type: ORDENES_EXAMENES_STATUS_ACTIONS.FETCH_ORDENES_EXAMENES_STATUS,
    payload: ordenesExamenesStatus
  })
}
