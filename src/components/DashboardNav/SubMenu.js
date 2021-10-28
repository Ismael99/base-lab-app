import React from 'react'
import { Avatar } from './Avatar'

export const SubMenu = (props) => {
  return (
    <nav className="hidden space-x-2 md:flex md:items-center">
      <Avatar {...props} />
    </nav>
  )
}
