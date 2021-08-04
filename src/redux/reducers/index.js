import { usersReducer } from './usersReducer'
import { recordsStatusReducer } from './recordsStatusReducer'
import { pacientesReducer } from './pacientesReducer'
import { rolesReducer } from './rolesReducer'

export const roles = rolesReducer
export const pacientes = pacientesReducer
export const users = usersReducer
export const records_status = recordsStatusReducer
