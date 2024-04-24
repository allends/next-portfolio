import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen flex flex-col ${poppins.className} relative`}>
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
