import { useState } from 'react'

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openClasses, setOpenClasses] = useState('')

  const handleIsOpen = (e) => {
    e.preventDefault()
    //isOpen == true y se presiona entonces isOpen = false y se eliminan las clases
    if (isOpen) {
      setIsOpen(false)
      setOpenClasses('')
      //isOpen == false y se preciona entonces isOpen = true y se agregan las clases
    } else if (!isOpen) {
      setIsOpen(true)
      setOpenClasses('bg-blue-100 dark:bg-blue-600')
    }
  }

  return [isOpen, handleIsOpen, openClasses]
}
