import { TableActions } from '../components/Table/TableActions'
import { TableActionsLogs } from '../components/Table/TableActionsLogs'

export const ActionTypeRender = (actionType) => {
  switch (actionType) {
    case 'standar':
      return TableActions
    case 'logs':
      return TableActionsLogs
    default:
      return TableActions
  }
}
