import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro':"price_1ThVXaH2mTCz2cfCvq8Ds4L4",
    'seeker_premium':"price_1ThWp9H2mTCz2cfCP9QhQeEB",
    'seeker_growth':"price_1ThWoAH2mTCz2cfCEutF4kqO",
    'seeker_enterprice':"price_1ThWnHH2mTCz2cfChW83Dy2Y",
}