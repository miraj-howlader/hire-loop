import { protectedFetch, serverFetch } from "../cors/server"
import { getUserSession } from "../cors/session"


export const getCompanies = async ()=>{
    return protectedFetch('/api/companies')
}
export const getRecruiterCompnay = async (recruiterId)=>{
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`)
    
}

export const getLoggedInRecruiterCompany = async () =>{
    const user = await getUserSession()
    return getRecruiterCompnay(user?.id)
}