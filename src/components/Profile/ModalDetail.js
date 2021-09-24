import React from 'react'

export const ModalDetail = ({ user, role }) => (
  <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
    <h2
      className="text-lg font-medium text-gray-900 leading-6"
      id="modal-title"
    >
      Mi Perfil
    </h2>
    <div className="mt-3">
      <p className="text-sm font-bold text-gray-501">Nombre: </p>
      <p className="text-sm text-gray-501">{user.user_name}</p>
    </div>
    <div className="mt-3">
      <p className="text-sm font-bold text-gray-501">Username: </p>
      <p className="text-sm text-gray-501">{user.user_username}</p>
    </div>
    <div className="mt-3">
      <p className="text-sm font-bold text-gray-501">Rol: </p>
      <p className="text-sm text-gray-501">{role.role_name}</p>
    </div>
  </div>
)
