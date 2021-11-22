import { client } from '../../api'
import { EXAMENES_TEMPLETE_ACTIONS } from './types'

const resource = 'examenes_templete'

export const thunkFetchExamenesTemplete = async (dispatch, _) => {
  const examenes_templete = await client.get({ resource: resource })
  await dispatch({
    type: EXAMENES_TEMPLETE_ACTIONS.FETCH_EXAMENES_TEMPLETE,
    payload: examenes_templete
  })
}
