'use server'

import { serverMutation } from "../cors/server"

export const submitApplication = async (applicationData)=>{
    return serverMutation('/api/applications',applicationData)
}