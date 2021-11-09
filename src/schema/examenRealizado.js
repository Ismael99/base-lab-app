import { BeakerIcon } from '@heroicons/react/outline'

export const examenRealizado = (Yup) => ({
  validations: Yup.object({
    examen_realizado_resultados: Yup.array(
      Yup.object().shape({
        label: Yup.string()
          .min(3, 'Carácteres mínimos 3')
          .required('Ingrese nombre del campo'),
        value: Yup.string()
          .min(1, 'Carácteres mínimos 1')
          .required('Ingrese resultado de examen'),
        rn: Yup.string()
      })
    ).required('Campo requerido'),
    examen_realizado_quimico: Yup.array(
      Yup.object().shape({
        value: Yup.number().min(1).required('Campo requerido'),
        label: Yup.string()
          .min(2, 'Caráteres mínimos 2')
          .required('Campo requerido')
      })
    ).required('Campo requerido')
  }),
  initialValues: {
    examen_realizado_resultados: [
      {
        label: '',
        value: '',
        rn: ''
      }
    ],
    examen_realizado_quimico: undefined
  },
  tableHeaders: ['Examen', 'N° de Oeden', 'Acciones'],
  keys: ['examen_realizado_examen', 'examen_realizado_orden_examen'],
  fields: [
    {
      label: 'Resultados',
      placeholder: 'Resultados',
      type: 'array_field',
      name: 'examen_realizado_resultados',
      icon: BeakerIcon
    },
    {
      label: 'Quimicos',
      placeholder: 'Quimicos',
      type: 'datalist',
      name: 'examen_realizado_quimico',
      icon: BeakerIcon,
      id: 'quimico_id',
      status: 'quimico_status',
      value: 'quimico_nombre',
      module: 'quimicos',
      isMulti: true
    }
  ]
})
