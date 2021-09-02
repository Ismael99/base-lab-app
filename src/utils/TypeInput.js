import { InputText } from '../components/Form/InputText'
import { InputRadio } from '../components/Form/InputRadio'
import { InputSelect } from '../components/Form/InputSelect'
import { DataList } from '../components/Form/DataList'
import { CustomDataList } from '../components/Form/CustomDatalist'
import { InputTotalPrecio } from '../components/Form/InputTotalPrecio'
export const TypeInput = (type, isInterfaceView) => {
  switch (type) {
    case 'select':
      return InputSelect
    case 'radio':
      return InputRadio
    case 'text':
      return InputText
    case 'datalist': {
      if (isInterfaceView) return InputSelect
      return DataList
    }
    case 'datalist_multi': {
      return CustomDataList
    }
    case 'totalPrecio': {
      return InputTotalPrecio
    }
    default:
      return InputText
  }
}
