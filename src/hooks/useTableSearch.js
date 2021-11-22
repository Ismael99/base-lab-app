import { useState, useEffect } from 'react'

export const useTableSearch = (
  initialData = [],
  PER_PAGE,
  currentPage,
  setCurrentPage
) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(initialData)
  const [offset, setOffset] = useState(0)
  //Actualiza el estado cuando detecta mofificaciones en initialData (Actualizaciones de registros,
  //etc)
  useEffect(() => {
    setData(initialData)
  }, [initialData])
  useEffect(() => {
    const dataLength = data.length
    const isInt = Number.isInteger(dataLength / PER_PAGE)
    const countPages = !isInt
      ? ((dataLength / PER_PAGE) | 0) + 1
      : dataLength / PER_PAGE
    if (currentPage > countPages - 1) {
      if (countPages === 0) {
        setCurrentPage(0)
      } else {
        setCurrentPage(countPages - 1)
      }
    }
    const valueOffset = currentPage * PER_PAGE
    setOffset(valueOffset)
  }, [search, currentPage, data])
  const handleTableSearch = ({ target }) => {
    const { value } = target
    setSearch(value)
    if (value === '') setData(initialData)
    if (value.length > 0) {
      const sValue = value
      const fieldsInvalid = []
      const isFieldInvalid = (attribute) => {
        //Solo campos que no vayan a estar en algun formulario
        //ni en la tabla
        if (attribute.includes('password')) {
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
      if (result.length > 0) setData(result)
      else setData([])
    }
  }
  return [data, search, handleTableSearch, offset]
}
