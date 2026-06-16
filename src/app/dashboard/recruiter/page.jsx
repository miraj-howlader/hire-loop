'use client'
import DashboardStats from '@/components/DashboardStats'
import { authClient } from '@/lib/auth-client'
import { Briefcase, CircleCheck, Person, Thunderbolt } from '@gravity-ui/icons'
import { Flashlight } from 'lucide-react'
import React from 'react'

const RecruiterDashboardPage = () => {
    const {data:session,isPending} = authClient.useSession()
    const user = session?.user;

    const recruiterStats = [
        {title:'Total Job Posts', value:'46', icon: Briefcase},
        {title:'Total Applicants', value:'34', icon: Person},
        {title:'Active Jobs', value:'18', icon: Thunderbolt},
        {title:'Jobs Closed', value:'32', icon: CircleCheck},
    ]
    if(isPending){
        return <div>Loading...</div>
    }


  return (
    <div>
        <h2 className='text-3xl'>Welcome back, {user?.name}</h2>
        <DashboardStats statsData={recruiterStats}/>
    </div>
  )
}

export default RecruiterDashboardPage