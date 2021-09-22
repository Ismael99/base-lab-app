import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer } from './ModalContainer'
import { ModalInfo } from './ModalInfo'
import { ModalIcon } from './ModalIcon'
import { ModalDetail } from './ModalDetail'
import { ModalButtons } from './ModalButtons'
import { ModalAction } from './ModalAction'

export const Modal = (props) => {
  return (
    <ModalContainer static open={props.isOpen}>
      <ModalInfo>
        <ModalIcon {...props} />
        <ModalDetail {...props} />
      </ModalInfo>
      <ModalButtons>
        <ModalAction>Cerrar</ModalAction>
      </ModalButtons>
    </ModalContainer>
  )
}

Modal.propTypes = {
  user: PropTypes.object.isRequired,
}