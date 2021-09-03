import { usersReducer } from './usersReducer'
import { recordsStatusReducer } from './recordsStatusReducer'
import { pacientesReducer } from './pacientesReducer'
import { examenesReducer } from './examenesReducer'
import { rolesReducer } from './rolesReducer'
import { logsReducer } from './logsReducer'
import { quimicosReducer } from './quimicosReducer'
import { ordenesExamenesReducer } from './ordenesExamenesReducer'
import { examenesRealizadosReducer } from './examenesRealizadosReducer'
import { ordenesExamenesStatusReducer } from './ordenesExameneStatusReducer'

export const ordenes_examenes_status = ordenesExamenesStatusReducer
export const examenes_realizados = examenesRealizadosReducer
export const ordenes_examenes = ordenesExamenesReducer
export const logs = logsReducer
export const roles = rolesReducer
export const pacientes = pacientesReducer
export const users = usersReducer
export const records_status = recordsStatusReducer
export const examenes = examenesReducer
export const quimicos = quimicosReducer
