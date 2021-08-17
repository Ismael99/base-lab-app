import { BeakerIcon } from '@heroicons/react/outline'
export const quimico = (Yup) => ({
  validations: Yup.object({
    quimico_nombre: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    quimico_status: Yup.number().required('Campo requerido'),
  }),
  initialValues: {
    quimico_nombre: '',
    quimico_status: '',
  },
  tableHeaders: ['Nombre Quimico', 'Estado', 'Acciones'],
  keys: ['quimico_nombre', 'quimico_status',],
  fields: [
    {
      label: 'Nombre Quimico',
      placeholder: 'ingrese el nombre del quimico',
      type: 'text',
      name: 'quimico_nombre',
      icon:BeakerIcon
    },
  ]
})
