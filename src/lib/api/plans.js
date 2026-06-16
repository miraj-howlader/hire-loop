import { serverFetch } from "../cors/server"

export const getPlansById = async (planId)=>{
    return serverFetch(`/api/plans?plan_id=${planId}`)
}