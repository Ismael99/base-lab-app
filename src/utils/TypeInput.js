import { InputText } from '../components/Form/InputText'
import { InputRadio } from '../components/Form/InputRadio'
import { InputSelect } from '../components/Form/InputSelect'
export const TypeInput = (type) => {
  switch (type) {
    case 'select':
      return InputSelect
    case 'radio':
      return InputRadio
    case 'text':
      return InputText
    default:
      return InputText
  }
}
