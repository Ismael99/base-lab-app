import React from 'react'

export const DashboardSection = ({ children }) => (
  <div className="flex shadow-lg flex-col p-3 divide-y divide-opacity-10 divide-red-400">
    {children}
  </div>
)
