import { UserIcon, BriefcaseIcon } from '@heroicons/react/outline'

export const user = (Yup) => ({
  validations: Yup.object({
    user_name: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    user_role: Yup.number().required('Campo requerido'),
    user_status: Yup.number().required('Campo requerido')
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
      id: 'record_status_id',
      value: 'record_status_name',
      module: 'records_status'
    }
  ]
})
