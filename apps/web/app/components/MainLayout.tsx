import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-7xl ${className}`}>
      {children}
    </div>
  )
}
