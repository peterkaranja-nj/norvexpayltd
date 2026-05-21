import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationProvider from '@/components/AnimationProvider'

export const metadata: Metadata = {
  title: {
    default: 'NorveXPay - Secure & Global Payments',
    template: '%s | NorveXPay',
  },
  description: 'NorveXPay is a modern payment gateway that helps businesses accept payments securely, process transactions instantly, and scale globally.',
  keywords: ['payment gateway', 'online payments', 'payment processing', 'fintech', 'NorveXPay'],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-sans overflow-x-hidden mesh_gradient">
        {/* Ambient orbs — give glassmorphism context */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
          <div style={{ position: 'absolute', top: '-12%', right: '-8%', width: '55vw', height: '55vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,160,32,0.09) 0%, transparent 65%)', filter: 'blur(48px)' }} />
          <div style={{ position: 'absolute', top: '42%', left: '-12%', width: '42vw', height: '42vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,120,0,0.07) 0%, transparent 65%)', filter: 'blur(48px)' }} />
          <div style={{ position: 'absolute', bottom: '-8%', right: '28%', width: '48vw', height: '48vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,136,0,0.07) 0%, transparent 65%)', filter: 'blur(48px)' }} />
        </div>
        <AnimationProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
