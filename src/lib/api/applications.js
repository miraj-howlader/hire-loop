import { protectedFetch } from "../cors/server"

export const getApplicationsByApplicant = async (applicantId)=>{
    return protectedFetch(`/api/applications?applicantId=${applicantId}`)
}