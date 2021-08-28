import { BeakerIcon } from '@heroicons/react/outline'
export const quimico = (Yup) => ({
  validations: Yup.object({
    quimico_nombre: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    quimico_status: Yup.object()
      .shape({
        value: Yup.number()
          .min(1, 'Seleccione una opcion válida')
          .required('Campo Requerido'),
        label: Yup.string().required('Campo requerido')
      })
      .required('Campo Requerido')
  }),
  initialValues: {
    quimico_nombre: ''
  },
  tableHeaders: ['Nombre Quimico', 'Estado', 'Acciones'],
  keys: ['quimico_nombre', 'quimico_status'],
  fields: [
    {
      label: 'Nombre Quimico',
      placeholder: 'Ingrese el nombre del quimico',
      type: 'text',
      name: 'quimico_nombre',
      icon: BeakerIcon
    },
    {
      label: 'Quimico Estado',
      type: 'datalist',
      name: 'quimico_status',
      id: 'record_status_id',
      value: 'record_status_name',
      module: 'records_status',
      placeholder: 'Status Quimico'
    }
  ]
})
