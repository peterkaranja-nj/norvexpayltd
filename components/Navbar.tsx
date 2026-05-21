'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Logo, { LogoIcon } from '@/components/Logo'

const navLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/product', label: 'Product', icon: 'inventory_2' },
  { href: '/gateway', label: 'Payment Gateway', icon: 'payment' },
  { href: '/developers', label: 'Developers', icon: 'code' },
  { href: '/blog', label: 'Blog', icon: 'article' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 border-b border-outline-variant/20 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="flex justify-between items-center h-16 sm:h-20 px-gutter max-w-container-max mx-auto">
          {/* Logo */}
          <Logo size={34} textClass="font-headline-md text-headline-md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-medium text-body-md transition-colors relative ${
                    isActive
                      ? "text-primary font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex accent_gradient text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all text-sm whitespace-nowrap"
            >
              Get Started
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen overlay with slide-in drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(340px,92vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
            <div className="flex items-center gap-2.5">
              <LogoIcon size={28} />
              <span className="font-bold tracking-tight text-[17px]">
                <span className="text-on-background">NorveX</span>
                <span className="text-primary">Pay</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <p className="px-4 mb-3 text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
              Navigation
            </p>
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label, icon }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-[15px] transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-on-surface hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[20px] shrink-0"
                      style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      {icon}
                    </span>
                    {label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Drawer Footer CTA */}
          <div className="px-6 py-6 border-t border-outline-variant/20 space-y-3 bg-surface-container-lowest">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full accent_gradient text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all text-sm"
            >
              Get Started
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <p className="text-center text-xs text-on-surface-variant">
              Trusted by 10,000+ businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
