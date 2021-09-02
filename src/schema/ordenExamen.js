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
      .max(1000, 'Precio no Valido'),
    orden_exam_paciente: Yup.object()
      .shape({
        value: Yup.number()
          .min(1, 'Seleccione una opcion válida')
          .required('Campo Requerido'),
        label: Yup.string().required('Campo requerido')
      })
      .required('Campo Requerido')
  }),
  initialValues: {
    orden_exam_dr_responsable: '',
    examenes_realizados: []
  },
  tableHeaders: [
    'Paciente',
    'Dr Responsable',
    'Total Precio',
    'Fecha/Hora',
    'Detalles'
  ],
  keys: [
    'orden_exam_paciente',
    'orden_exam_dr_responsable',
    'orden_exam_total_precio',
    'orden_exam_created_at'
  ],
  fields: [
    {
      label: 'Paciente',
      placeholder: 'Paciente',
      type: 'datalist',
      name: 'orden_exam_paciente',
      icon: ClipboardListIcon,
      id: 'paciente_id',
      status: 'paciente_status',
      value: ['paciente_nombre', 'paciente_apellido'],
      module: 'pacientes',
      isMulti: false
    },
    {
      label: 'Dr Resposable',
      placeholder: 'Dr Resposable',
      type: 'text',
      name: 'orden_exam_dr_responsable',
      icon: BeakerIcon
    },
    {
      label: 'Examenes',
      placeholder: 'Examenes',
      type: 'datalist_multi',
      name: 'examenes_realizados',
      icon: ClipboardListIcon,
      id: 'examen_id',
      status: 'examen_status',
      value: ['examen_nombre', 'examen_precio'],
      module: 'examenes',
      extraValue: 'examen_precio',
      isMulti: true
    },
    {
      label: 'Total',
      placeholder: 'Total...',
      type: 'totalPrecio',
      name: 'orden_exam_total_precio',
      icon: CurrencyDollarIcon,
      disabled: true
    }
  ]
})
