import React from 'react'
import { EyeIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

export const TableActionsOrdenExamenes = ({ data, idKey }) => {
  return (
    <td className="px-6 py-3 whitespace-nowrap">
      <div className="flex items-center justify-center">
        <Link
          to={`./view/${data[idKey]}`}
          title="Ver detalles del registro"
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <EyeIcon />
        </Link>
        <Link
          to={`../examenes_realizados/examenes/${data[idKey]}`}
          title="Ver detalles de la orden"
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <ClipboardCheckIcon />
        </Link>
      </div>
    </td>
  )
}
