import React from 'react'
import { EyeIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

export const TableActionsExamenesRealizados = ({ data, idKey }) => {
  const resultados_min = data.examen_realizado_resultados[0].value
  return (
    <td className="px-6 py-3 whitespace-nowrap">
      <div className="flex items-center justify-center">
        <Link
          to={`../../resultados/view/${data[idKey]}?path=examenes_realizados/examenes/${data['examen_realizado_orden_examen']}`}
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <EyeIcon />
        </Link>
        <Link
          to={`../../resultados/${data[idKey]}?path=examenes_realizados/examenes/${data['examen_realizado_orden_examen']}`}
          className={`w-4 disabled-link mr-2 ${
            resultados_min === ''
              ? ' text-red-400 hover:text-red-600 '
              : 'hover:text-blue-500'
          } transform hover:scale-110`}
        >
          <ClipboardCheckIcon />
        </Link>
      </div>
    </td>
  )
}
