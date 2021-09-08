import { InputText } from '../components/Form/InputText'
import { InputRadio } from '../components/Form/InputRadio'
import { InputSelect } from '../components/Form/InputSelect'
import { DataList } from '../components/Form/DataList'
import { CustomDataList } from '../components/Form/CustomDatalist'
import { InputTotalPrecio } from '../components/Form/InputTotalPrecio'
import { InputFieldArray } from '../components/Form/InputFieldArray'
export const TypeInput = (type, isInterfaceView, isMulti = false) => {
  switch (type) {
    case 'select':
      return InputSelect
    case 'radio':
      return InputRadio
    case 'text':
      return InputText
    case 'datalist': {
      return DataList
    }
    case 'datalist_custom': {
      return CustomDataList
    }
    case 'array_field': {
      return InputFieldArray
    }
    case 'totalPrecio': {
      return InputTotalPrecio
    }
    default:
      return InputText
  }
}
