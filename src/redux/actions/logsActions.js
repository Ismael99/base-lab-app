import { client } from '../../api'
import { LOGS_ACTIONS } from './types'

const resource = 'logs'

export const thunkFetchLogs = async (dispatch, _) => {
  const logs = await client.get({ resource: resource })
  console.log(logs)
  await dispatch({
    type: LOGS_ACTIONS.FETCH_LOGS,
    payload: logs
  })
}
