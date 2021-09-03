import React from 'react'
import { EyeIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

export const TableActionsExamenesRealizados = ({ data, idKey }) => {
  return (
    <td className="px-6 py-3 whitespace-nowrap">
      <div className="flex items-center justify-center">
        <Link
          to={`./view/${data[idKey]}`}
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <EyeIcon />
        </Link>
        <Link
          to={`../../resultados/${data[idKey]}`}
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <ClipboardCheckIcon />
        </Link>
      </div>
    </td>
  )
}
