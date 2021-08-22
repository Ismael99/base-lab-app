import { UserIcon, BriefcaseIcon } from '@heroicons/react/outline'

export const user = (Yup) => ({
  validations: Yup.object({
    user_name: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    user_role: Yup.number()
      .required('Campo requerido')
      .min(1, 'Seleccione una opcion valida'),
    user_status: Yup.number()
      .required('Campo requerido')
      .min(1, 'Seleccione una opcion valida')
  }),
  initialValues: {
    user_id: 0,
    user_name: '',
    user_role: '',
    user_status: ''
  },
  tableHeaders: ['Nombre', 'Username', 'Rol', 'Status', 'Actions'],
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
      type: 'select',
      id: 'role_id',
      value: 'role_name',
      module: 'roles',
      status: 'role_status',
      name: 'user_role',
      icon: BriefcaseIcon
    },
    {
      label: 'Estado',
      placeholder: 'Estado',
      type: 'datalist',
      name: 'user_status',
      id: 'record_status_id',
      value: 'record_status_name',
      module: 'records_status'
    }
  ]
})
