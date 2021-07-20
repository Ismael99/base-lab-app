import { UserIcon, BriefcaseIcon } from '@heroicons/react/outline'
import { configureStore } from '../redux'
const store = configureStore()
const status = store.getState()
console.log(status.recordsStatus.state.data)
export const user = (Yup) => ({
  validations: Yup.object({
    user_name: Yup.string().min(3, 'Caracteres minimos 5').required('Required'),
    user_role: Yup.number().required('Required'),
    user_status: Yup.number().required('Required')
  }),
  initialValues: {
    user_id: 0,
    user_name: '',
    user_role: '',
    user_status: ''
  },
  tableHeaders: ['Nombre', 'Username', 'Status', 'Rol', 'Actions'],
  keys: ['user_name', 'user_username', 'user_role', 'user_status'],
  fields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
      type: 'text',
      name: 'user_name',
      icon: UserIcon
    },
    {
      label: 'Rol',
      placeholder: 'Rol',
      type: 'text',
      name: 'user_role',
      icon: BriefcaseIcon
    },
    {
      label: 'Estado',
      placeholder: 'Estado',
      type: 'select',
      name: 'user_status',
      options: status.recordsStatus.state.data,
      id: 'record_status_id',
      value: 'record_status_name'
    }
  ]
})
//{ record_status_id: 1, record_status_name: 'Activo' },
//{ record_status_id: 2, record_status_name: 'Inactivo' }
