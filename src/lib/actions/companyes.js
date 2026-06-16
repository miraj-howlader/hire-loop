'use server'

import { revalidatePath } from "next/cache"
import { serverMutation } from "../cors/server"

export const updateCompany = async (id,data)=>{
    const result =  serverMutation(`/api/companies/${id}`, data, 'PATCH')
    revalidatePath('/dashboard/admin/companies')
    return result
}

export const createCompany = async (newCompanyData)=>{
    return serverMutation('/api/companies',newCompanyData)
    // const res = await fetch(`${baseUrl}/api/companies`,{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body: JSON.stringify(newCompanyData)
    // })
    // return res.json
}