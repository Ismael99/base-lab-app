import {
  LocationMarkerIcon,
  PhoneIcon,
  CalendarIcon
} from '@heroicons/react/outline'
const validationPhoneNumber = /^[762]{1}[0-9]{3}-?[0-9]{4}$/g
export const paciente = (Yup) => ({
  validations: Yup.object({
    paciente_nombre: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    paciente_apellido: Yup.string()
      .min(3, 'Caracteres mínimos 3')
      .required('Campo requerido'),
    paciente_telefono: Yup.string().matches(
      validationPhoneNumber,
      'Número no válido'
    ),
    paciente_direccion: Yup.string()
      .min(5, 'Caracteres mínimos 5')
      .max(40, 'Caracteres máximos 40')
      .required('Campo requerido'),
    paciente_edad: Yup.number()
      .min(1, 'Dígitos mínimos 1')
      .integer('Formato no valido')
      .positive('Valor no válido')
      .required('Campo requerido')
      .max(130, 'Edad no válida'),
    paciente_sexo: Yup.string()
      .min(1, 'Caracteres mínimos 1')
      .max(10, 'Caracteres máximos 10')
      .required('Campo requerido')
  }),
  initialValues: {
    paciente_nombre: '',
    paciente_apellido: '',
    paciente_direccion: '',
    paciente_sexo: '',
    paciente_telefono: ''
  },
  tableHeaders: [
    'Nombre',
    'Apellido',
    'Dirección',
    'Edad',
    'Sexo',
    'Teléfono',
    'Acciones'
  ],
  keys: [
    'paciente_nombre',
    'paciente_apellido',
    'paciente_direccion',
    'paciente_edad',
    'paciente_sexo',
    'paciente_telefono'
  ],
  fields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
      type: 'text',
      name: 'paciente_nombre'
    },
    {
      label: 'Apellido',
      placeholder: 'Apellido',
      type: 'text',
      name: 'paciente_apellido'
    },
    {
      label: 'Dirección',
      placeholder: 'Dirección',
      type: 'text',
      name: 'paciente_direccion',
      icon: LocationMarkerIcon
    },
    {
      label: 'Sexo',
      type: 'radio',
      name: 'paciente_sexo',
      options: [
        {
          value: 'M',
          text: 'Masculino'
        },
        {
          value: 'F',
          text: 'Femenino'
        }
      ]
    },
    {
      label: 'Teléfono',
      placeholder: 'Teléfono',
      type: 'text',
      name: 'paciente_telefono',
      icon: PhoneIcon
    },
    {
      label: 'Edad',
      placeholder: 'Edad',
      type: 'number',
      name: 'paciente_edad',
      icon: CalendarIcon
    }
  ]
})
