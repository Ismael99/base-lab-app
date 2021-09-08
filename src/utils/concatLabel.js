export const concatLabel = (values, object) => {
  let concat = ''
  if (Array.isArray(values)) {
    const values_length = values.length
    for (let i = 0; i < values_length; i++) {
      if (values[i].includes('precio')) {
        concat += `  \u27a4 $${object[values[i]]}`
      } else {
        concat += ` ${object[values[i]]}`
      }
    }
    return concat
  } else {
    return object[values]
  }
}
