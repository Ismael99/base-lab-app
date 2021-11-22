const MESES = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic'
]

const getHour = (hour, minutes) => {
  const format_minute = minutes < 10 ? `0${minutes}` : `${minutes}`
  if (hour > 12) {
    return `${hour - 12}:${format_minute} PM`
  } else {
    return `${hour}:${format_minute} AM`
  }
}

export const FormatDate = (date) => {
  const day_num = date.getDate()
  const month = MESES[date.getMonth()]
  const year = date.getFullYear()
  return `${day_num}/${month}/${year}`
}

export const FormatDateTime = (date) => {
  const day_num = date.getDate()
  const month = MESES[date.getMonth()]
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${day_num}/${month}/${year} ${getHour(hour, minutes)}`
}
