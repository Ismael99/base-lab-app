import { client } from '../../api'
import { RECORD_STATUS_ACTIONS } from './types'

export const fetchRecordsStatus = (recordsStatus) => ({
  type: RECORD_STATUS_ACTIONS.FETCH_RECORD_STATUS,
  payload: recordsStatus
})

export const thunkFetchRecordsStatus = async (dispatch, _) => {
  const recordsStatus = await client.get({ resource: 'records_status' })
   await dispatch({
    type: RECORD_STATUS_ACTIONS.FETCH_RECORD_STATUS,
    payload: recordsStatus
  })
}
