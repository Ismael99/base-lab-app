import { client } from '../../api'
import { QUIMICOS_EXAMENES_ACTIONS } from './types'

const resource = 'quimicos_examenes'

export const thunkFetchQuimicosExamenes = async (dispatch, _) => {
  const quimicos_examenes = await client.get({ resource: resource })
  await dispatch({
    type: QUIMICOS_EXAMENES_ACTIONS.FETCH_QUIMICOS_EXAMENES,
    payload: quimicos_examenes
  })
}
