import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer } from './ModalContainer'
import { ModalInfo } from './ModalInfo'
import { ModalIcon } from './ModalIcon'
import { ModalDetail } from './ModalDetail'
import { ModalButtons } from './ModalButtons'
import { ModalAction } from './ModalAction'

export const Profile = (props) => {
  return (
    <ModalContainer static>
      <ModalInfo>
        <ModalIcon {...props} />
        <ModalDetail {...props} />
      </ModalInfo>
      <ModalButtons>
        <ModalAction {...props} >Cerrar</ModalAction>
      </ModalButtons>
    </ModalContainer>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
}