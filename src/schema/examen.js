import { BeakerIcon , ClipboardListIcon , CurrencyDollarIcon } from '@heroicons/react/outline'
export const examen = (Yup) => ({
  validations: Yup.object({
    examen_nombre: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    examen_tipo_muestra: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    examen_precio: Yup.number()
      .min(1, 'Dígitos mínimos 1')
      .positive()
      .required('Campo requerido')
      .max(1000, 'Precio no Valido')
      .test(
        'is-decimal',
    'invalid decimal',
    value => (value + "").match(/^[0-9]*.?[0-9]*?$/),
      ),
  }),
  initialValues: {
    examen_nombre: '',
    examen_tipo_muestra: '',
    examen_precio: 0,
  },
  tableHeaders: ['Examen', 'Tipo de Muestra', 'Precio', 'Estado', 'Acciones'],
  keys: ['examen_nombre','examen_tipo_muestra','examen_precio', 'examen_status',],
  fields: [
    {
      label: 'Examen',
      placeholder: 'Nombre Examen',
      type: 'text',
      name: 'examen_nombre',
      icon:ClipboardListIcon
    },
    {
      label: 'Tipo de Muestra',
      placeholder: 'Muestra',
      type: 'text',
      name: 'examen_tipo_muestra',
      icon:BeakerIcon,
    },
    {
      label: 'Precio',
      placeholder: 'Precio de Examen',
      type: 'number',
      name: 'examen_precio',
      icon: CurrencyDollarIcon
    },
  ]
})
