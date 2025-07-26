'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

function provider({children}) {
  return (
    <>
    <SessionProvider>
        {children}
    </SessionProvider>
    </>
  )
}

export default provider