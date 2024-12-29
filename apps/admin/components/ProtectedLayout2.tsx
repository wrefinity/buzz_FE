'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth_token } from '@/utils/constants'
import { Skeleton } from './ui/skeleton'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export function ProtectedLayout2({ children }: ProtectedLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem(auth_token)
    if (!token) {
      router.replace('/sign-in')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) {
    return <Skeleton className="h-[405px] w-[800px] rounded-xl" />;
  }

  return <>{children}</>
}

