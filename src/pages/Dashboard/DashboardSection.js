import React from 'react'

export const DashboardSection = ({ children }) => (
  <div className="flex flex-col p-3 divide-y divide-opacity-10 divide-red-800">
    {children}
  </div>
)
