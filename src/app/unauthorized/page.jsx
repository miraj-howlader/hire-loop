'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from '@heroui/react'
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react'

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-danger/10">
          <ShieldAlert className="h-10 w-10 text-danger" />
        </div>

        <h1 className="mb-2 text-4xl font-bold">401</h1>

        <h2 className="mb-3 text-2xl font-semibold">
          Unauthorized Access
        </h2>

        <p className="mb-8 text-default-500">
          Sorry, you don't have permission to access this page.
          Please sign in with an authorized account or return to the homepage.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            as={Link}
            href="/"
            color="primary"
            startContent={<Home size={18} />}
          >
            Go Home
          </Button>

          <Button
            variant="bordered"
            onPress={() => window.history.back()}
            startContent={<ArrowLeft size={18} />}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage