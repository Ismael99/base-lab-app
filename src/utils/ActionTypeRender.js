import { TableActions } from './TableActions'
import { TableActionsLogs } from './TableActionsLogs'

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
