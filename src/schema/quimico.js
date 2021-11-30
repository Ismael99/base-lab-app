import { BeakerIcon } from '@heroicons/react/outline'
export const quimico = (Yup) => ({
  validations: Yup.object({
    quimico_nombre: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .max(30, 'Caracteres maximos 30')
      .required('Campo requerido')
  }),
  initialValues: {
    quimico_nombre: ''
  },
  tableHeaders: ['Nombre Quimico', 'Acciones'],
  keys: ['quimico_nombre'],
  fields: [
    {
      label: 'Nombre Quimico',
      placeholder: 'Ingrese el nombre del quimico',
      type: 'text',
      name: 'quimico_nombre',
      icon: BeakerIcon
    }
  ]
})
