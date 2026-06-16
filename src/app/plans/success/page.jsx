import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { createSubscription } from '@/lib/actions/subscription'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id) {
    throw new Error('Please provide a valid session_id (`cs_test_...`)')
  }

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const subsInfo = {
        email:customerEmail,
        planId: metadata.planId
    }

    const result = await createSubscription(subsInfo)


    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl border border-default-200 bg-content1 p-10 shadow-2xl text-center">
            
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                <CheckCircle className="h-12 w-12 text-success" />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-3">
              Payment Successful 🎉
            </h1>

            <p className="text-default-500 text-lg mb-6">
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>

            <div className="rounded-2xl bg-default-100 p-4 mb-8">
              <p className="text-sm text-default-500">
                Confirmation email sent to
              </p>
              <p className="font-semibold break-all">
                {customerEmail}
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/dashboard"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium transition hover:opacity-90"
              >
                Go to Dashboard
              </Link>

              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-xl border border-default-200 px-6 py-3 font-medium transition hover:bg-default-100"
              >
                Back to Home
              </Link>
            </div>

            <p className="mt-8 text-sm text-default-500">
              Need help? Contact us at{' '}
              <a
                href="mailto:orders@example.com"
                className="text-primary hover:underline"
              >
                orders@example.com
              </a>
            </p>
          </div>
        </div>
      </main>
    )
  }
}