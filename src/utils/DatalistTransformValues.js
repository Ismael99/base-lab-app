const DATALIST_KEYS = ['user_status', 'quimico_status', 'orden_exam_paciente']

export function datalistTransform(values) {
  const keys = Object.keys(values)
  let currentValue
  const transformedValues = keys.reduce((previousVals, key) => {
    currentValue = DATALIST_KEYS.includes(key)
      ? { [key]: values[key].value }
      : { [key]: values[key] }
    return { ...previousVals, ...currentValue }
  }, {})
  return transformedValues
}
