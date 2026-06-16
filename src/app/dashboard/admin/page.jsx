import { getCompanies } from '@/lib/api/companies'
import React from 'react'

const AdminDashboardHomePage =async () => {
   const companies = await getCompanies()
  return (
    <div>AdminDashboardHomePage {companies.length}</div>
  )
}

export default AdminDashboardHomePage