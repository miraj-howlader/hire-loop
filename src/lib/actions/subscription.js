'use server'

import { serverMutation } from "../cors/server"

export const createSubscription = async (subInfo)=>{
    return serverMutation('/api/subscriptions',subInfo)
}