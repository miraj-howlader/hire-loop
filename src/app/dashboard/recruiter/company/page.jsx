import React from 'react'
import CompanyProfile from './CompanyProfile'
import { getUserSession } from '@/lib/cors/session'
import { getRecruiterCompnay } from '@/lib/api/companies'

const CompanyPage =async () => {
    const user = await getUserSession()
    const company = await getRecruiterCompnay(user?.id)
    console.log(company)
    
  return (
    <div>
        <CompanyProfile recruiter={user} recruiterCompnay={company}/>
    </div>
  )
}

export default CompanyPage