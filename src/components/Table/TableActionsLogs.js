import React from 'react'
import { ClipboardListIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

export const TableActionsLogs = ({ data }) => {
  console.log(data)
  const { log_register_id, log_register_module } = data
  if (data.log_action === 'delete') return <></>
  return (
    <td className="px-6 py-3 whitespace-nowrap">
      <div className="flex items-center justify-center">
        <Link
          to={`/dashboard/${log_register_module}/view/${log_register_id}`}
          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
        >
          <ClipboardListIcon />
        </Link>
      </div>
    </td>
  )
}
