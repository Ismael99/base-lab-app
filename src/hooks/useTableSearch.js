import { useState } from 'react'

export const useTableSearch = (initialData = []) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(initialData)

  /* const checkIfContains = (object, searchValue) => {
    //  Object.values(object).map(value => value.indexOf(searchValue) !== -1)
    let founded = false 
    Object.values(object).forEach(value => {
      if (typeof value == "string" && value.indexOf(searchValue) > -1) {
        founded = true
      }
    })
    return founded
  }*/

  const handleTableSearch = ({ target }) => {
    const { value } = target
    console.log('value search: ' + value)
    setSearch(value)
    if (value === '') setData(initialData)
    if (value.length > 0) {
      const sValue = value
      const fieldsInvalid = []
      const isFieldInvalid = (attribute) => {
        if (
          attribute.includes('updated_at') ||
          attribute.includes('created_at') ||
          attribute.includes('password')
        ) {
          fieldsInvalid.push(attribute)
        }
      }
      Object.keys(initialData[0]).forEach((attr) => {
        isFieldInvalid(attr)
      })
      const isSubString = (value) =>
        typeof value == 'string' &&
        value.toLowerCase().includes(sValue.toLowerCase())
      const result = []
      initialData.forEach((object) => {
        fieldsInvalid.forEach((field) => {
          delete object[field]
        })
        if (Object.values(object).some(isSubString)) result.push(object)
      })
      console.log('Data: ')
      console.log(result)
      if (result.length > 0) setData(result)
      else setData([])
    }
  }

  return [data, search, handleTableSearch]
}
