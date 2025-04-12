import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default DefaultLayout
