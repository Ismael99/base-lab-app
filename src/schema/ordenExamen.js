import {
  BeakerIcon,
  ClipboardListIcon,
  CurrencyDollarIcon
} from '@heroicons/react/outline'
export const ordenExamen = (Yup) => ({
  validations: Yup.object({
    orden_exam_dr_responsable: Yup.string()
      .min(10, 'Caracteres mínimos 10')
      .required('Campo requerido'),
    orden_exam_total_precio: Yup.number()
      .min(1, 'Dígitos mínimos 1')
      .positive('Precio no válido')
      .required('Campo requerido')
      .max(1000, 'Precio no Valido')
      .test('is-decimal', 'invalid decimal', (value) =>
        (value + '').match(/^[0-9]*.?[0-9]*?$/)
      ),
    orden_exam_paciente: Yup.object()
      .shape({
        value: Yup.number()
          .min(1, 'Seleccione una opcion válida')
          .required('Campo Requerido'),
        label: Yup.string().required('Campo requerido')
      })
      .required('Campo Requerido'),
    examenes_realizados: Yup.array().required('Campo Requerido')
  }),
  tableHeaders: ['Paciente', 'Dr Responsable', 'Total Precio', 'Acciones'],
  keys: [
    'orden_exam_paciente',
    'orden_exam_dr_responsable',
    'orden_exam_total_precio'
  ],
  fields: [
    {
      label: 'Paciente',
      placeholder: 'Paciente',
      type: 'text',
      name: 'orden_exam_paciente',
      icon: ClipboardListIcon
    },
    {
      label: 'Dr Resposable',
      placeholder: 'Dr Resposable',
      type: 'text',
      name: 'orden_exam_dr_responsable',
      icon: BeakerIcon
    },
    {
      label: 'Total',
      placeholder: 'Total...',
      type: 'number',
      name: 'orden_exam_total_precio',
      icon: CurrencyDollarIcon,
      disabled: true
    }
  ]
})
