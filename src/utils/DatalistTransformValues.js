const DATALIST_KEYS = ['record_status', 'key', 'user_status']

export function datalistTransform(values) {
  const keys = Object.keys(values)
  let currentValue
  const transformedValues = keys.reduce((previousVals, key) => {
    currentValue = DATALIST_KEYS.includes(key)
      ? { [key]: values[key].value }
      : { [key]: values[key] }
    debugger
    return { ...previousVals, ...currentValue }
  }, {})
  debugger
  return transformedValues
}

const data = {
  key: {
    value: 'value'
  },
  record_status: {
    value: 'record_status'
  },
  is_not_datalist: 'should work too'
}
console.log(datalistTransform(data))
