import React from 'react'

export const TableHeaders = ({ headers }) => (
  <thead>
    <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
      {headers.map((header, key) => {
        return (
          <th
            key={key}
            className={`px-6 py-3 ${
              key < 1 ? ' text-left ' : 'text-center'
            } text-left`}
          >
            {header}
          </th>
        )
      })}
    </tr>
  </thead>
)
