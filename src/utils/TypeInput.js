import { InputText } from '../components/Form/InputText'
import { InputRadio } from '../components/Form/InputRadio'
import { InputSelect } from '../components/Form/InputSelect'
import { DataList } from '../components/Form/DataList'
export const TypeInput = (type, isInterfaceView) => {
  switch (type) {
    case 'select':
      return InputSelect
    case 'radio':
      return InputRadio
    case 'text':
      return InputText
    case 'datalist': {
      if (isInterfaceView) return InputText
      return DataList
    }
    default:
      return InputText
  }
}