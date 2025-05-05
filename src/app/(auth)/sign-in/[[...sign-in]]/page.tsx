"use client"
import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='w-full h-screen flex  items-center justify-center'>
        <SignIn/>
    </main>
  )
}

export default SignInPage
