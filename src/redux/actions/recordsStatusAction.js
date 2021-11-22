import { client } from '../../api'
import { RECORD_STATUS_ACTIONS } from './types'

export const fetchRecordsStatus = (recordsStatus) => ({
  type: RECORD_STATUS_ACTIONS.FETCH_RECORD_STATUS,
  payload: recordsStatus
})

export const thunkFetchRecordsStatus = (dispatch, _) => {
  client.get({ resource: 'records_status' }).then((recordsStatus) => {
    dispatch({
      type: RECORD_STATUS_ACTIONS.FETCH_RECORD_STATUS,
      payload: recordsStatus
    })
  })
}
