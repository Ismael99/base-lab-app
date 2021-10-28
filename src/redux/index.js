import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
  users,
  records_status,
  pacientes,
  roles,
  examenes,
  logs,
  quimicos,
  ordenes_examenes,
  examenes_realizados,
  ordenes_examenes_status,
  quimicos_examenes,
  examenes_templete,
  login
} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const reducer = combineReducers({
  users,
  records_status,
  pacientes,
  roles,
  logs,
  examenes,
  quimicos,
  ordenes_examenes,
  examenes_realizados,
  ordenes_examenes_status,
  quimicos_examenes,
  examenes_templete,
  login
})

export const configureStore = () => createStore(reducer, composedEnhancer)
