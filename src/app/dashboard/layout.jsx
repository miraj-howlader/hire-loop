
import { DashboardSidebar } from '@/components/DashboardSidebar'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-scree">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout