import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { users, records_status, pacientes, roles, examenes, logs} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const reducer = combineReducers({
  users,
  records_status,
  pacientes,
  roles,
  logs,
  examenes
})

export const configureStore = () => createStore(reducer, composedEnhancer)
