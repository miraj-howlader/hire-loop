
'use client'



import { authClient, signUp } from '@/lib/auth-client'
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'

import { Check, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'

const SignIn = () => {
  const [loading, setLoading] = useState(false)
    const router = useRouter()
   
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const handleSignup = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const { data, error } = await authClient.signIn.email({

      email,
      password,

    })

    if (error) {
      console.error(error)

      toast.error(
        error.message || error.statusText || 'Failed to create account'
      )

      return
    }

    if (data) {
      toast.success('Login successfully')
      router.push('/')
    }
  } catch (err) {
    console.error(err)

    toast.error(
      err?.message || 'Something went wrong. Please try again.'
    )
  } finally {
    setLoading(false)
  }
}
  return (
     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black px-4">
    
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
    
            {/* HEADER */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white">
               Sign In
              </h1>
    
              <p className="mt-2 text-sm text-gray-400">
                Join and start exploring amazing products
              </p>
            </div>
    
            {/* FORM */}
            <Form className="flex flex-col gap-5" onSubmit={handleSignup}>
    
              
    
              <TextField isRequired name="email" type="email">
                <Label className="text-gray-300">Email</Label>
                <Input placeholder="john@example.com" className="h-12"
                value={email} onChange={(e)=>setEmail(e.target.value)} />
                <FieldError />
              </TextField>
    
              <TextField isRequired minLength={8} name="password" type="password">
                <Label className="text-gray-300">Password</Label>
                <Input placeholder="Create your password" className="h-12" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Description className="text-xs text-gray-500">
                  Must contain 8 characters, 1 uppercase & 1 number
                </Description>
                <FieldError />
              </TextField>
    
             
    
              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-12 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Check className="mr-2" />
                    Sign In
                  </>
                )}
              </Button>
    
              <div className="relative flex items-center py-2">
                <div className="h-px w-full bg-white/10" />
                <span className="absolute left-1/2 -translate-x-1/2 bg-zinc-950 px-3 text-xs text-gray-500">
                  OR
                </span>
              </div>
    
              <Button
                type="button"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 text-white"
              >
                <FaGoogle className="mr-2" />
                Continue with Google
              </Button>
    
              <p className="text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <Link href="/signup" className="text-violet-400 hover:text-violet-300">
                  Sign Up
                </Link>
              </p>
    
            </Form>
          </div>
        </div>
  )
}

export default SignIn