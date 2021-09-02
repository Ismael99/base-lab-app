import { TableActions } from '../components/Table/TableActions'
import { TableActionsLogs } from '../components/Table/TableActionsLogs'
import { TableActionsOnlyDetail } from '../components/Table/TableActionsOnlyDetail'

export const ActionTypeRender = (actionType) => {
  switch (actionType) {
    case 'standar':
      return TableActions
    case 'logs':
      return TableActionsLogs
    case 'only_detail':
      return TableActionsOnlyDetail
    default:
      return TableActions
  }
}
