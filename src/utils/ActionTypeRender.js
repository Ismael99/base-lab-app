import { TableActions } from '../components/Table/TableActions'
import { TableActionsLogs } from '../components/Table/TableActionsLogs'
import { TableActionsOrdenExamenes } from '../components/Table/TableActionsOrdenExamenes'
import { TableActionsExamenesRealizados } from '../components/Table/TableActionsExamenesRealizados'
export const ActionTypeRender = (actionType) => {
  switch (actionType) {
    case 'standar':
      return TableActions
    case 'logs':
      return TableActionsLogs
    case 'orden_examenes':
      return TableActionsOrdenExamenes
    case 'examenes_realizados':
      return TableActionsExamenesRealizados
    default:
      return TableActions
  }
}
