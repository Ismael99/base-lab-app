import { InputText } from '../components/Form/InputText'
import { InputRadio } from '../components/Form/InputRadio'
import { InputSelect } from '../components/Form/InputSelect'
import { InputDatalist } from '../components/Form/InputDatalist'
export const TypeInput = (type) => {
  switch (type) {
    case 'select':
      return InputSelect
    case 'radio':
      return InputRadio
    case 'text':
      return InputText
    case 'datalist':
      return InputDatalist
    default:
      return InputText
  }
}
