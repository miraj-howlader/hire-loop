import { getApplicationsByApplicant } from '@/lib/api/applications'
import { getUserSession } from '@/lib/cors/session'
import React from 'react'
import ApplicationsTable from './ApplicationTable'

const Applications = async () => {
    const user = await getUserSession()
    const jobs = await getApplicationsByApplicant(user.id)


  return (
    <div>
        <ApplicationsTable jobs={jobs}/>
    </div>
  )
}

export default Applications