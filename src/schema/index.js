import * as Yup from 'yup'
import { user } from './user'
import { paciente } from './paciente'
import { examen } from './examen'
import { roles } from './roles'
import { logs } from './logs'

export const LoginSchema = {
  initialValues: {
    user_username: '',
    user_password: ''
  },
  validations: Yup.object({
    user_username: Yup.string()
      .max(30, 'Caracteres maximos 25')
      .min(4, 'Caracteres minimos 4')
      .required('Required'),
    user_password: Yup.string()
      .max(25, 'Caracteres maximos 25')
      .min(8, 'Caracteres minimos 8')
      .required('Required')
  })
}
export const RolesSchema = roles()
export const LogsSchema = logs()
export const PacienteSchema = paciente(Yup)
export const ExamenSchema = examen(Yup)
export const UserSchema = user(Yup)
