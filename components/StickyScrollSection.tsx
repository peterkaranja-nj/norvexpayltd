'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    label: '01 · Accept Payments',
    title: 'Accept payments from anywhere in the world',
    desc: 'Cards, wallets, bank transfers, all in one integration. 135+ currencies and 50+ local payment methods with zero extra code.',
    icon: 'credit_card',
    accent: '#CC8800',
    light: 'rgba(204,136,0,0.08)',
    mid: 'rgba(204,136,0,0.15)',
  },
  {
    label: '02 · Instant Payouts',
    title: 'Move money the moment a sale lands',
    desc: 'Same-day settlements directly to your bank. No holding periods, no delays. what you earn is yours, instantly.',
    icon: 'bolt',
    accent: '#006d2c',
    light: 'rgba(0,109,44,0.08)',
    mid: 'rgba(0,109,44,0.15)',
  },
  {
    label: '03 · Fraud Shield',
    title: 'AI that stops fraud before it starts',
    desc: 'Machine-learning models trained on billions of transactions detect threats in milliseconds and block them automatically.',
    icon: 'security',
    accent: '#515d84',
    light: 'rgba(81,93,132,0.08)',
    mid: 'rgba(81,93,132,0.15)',
  },
  {
    label: '04 · Deep Analytics',
    title: 'Every metric your finance team needs',
    desc: 'Real-time revenue charts, cohort analysis, and one-click reports, all inside one dashboard, no extra BI tool required.',
    icon: 'analytics',
    accent: '#CC8800',
    light: 'rgba(204,136,0,0.08)',
    mid: 'rgba(204,136,0,0.15)',
  },
]

export default function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrolled = -rect.top
      const total = el.offsetHeight - window.innerHeight
      if (total <= 0) return
      const progress = Math.max(0, Math.min(0.9999, scrolled / total))
      setActiveStep(Math.min(steps.length - 1, Math.floor(progress * steps.length)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const step = steps[activeStep]

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-surface">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">How it works</span>
        </div>

        <div className="max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — step list */}
          <div className="space-y-3">
            {steps.map(({ label, title, desc, accent }, i) => {
              const isActive = i === activeStep
              return (
                <div
                  key={label}
                  className="rounded-2xl transition-all duration-500 ease-out"
                  style={{
                    padding: isActive ? '24px 28px' : '16px 28px',
                    background: isActive ? '#fff' : 'transparent',
                    boxShadow: isActive ? '0 8px 32px rgba(204,136,0,0.12)' : 'none',
                    border: isActive ? '1px solid rgba(204,136,0,0.15)' : '1px solid transparent',
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1.5 transition-colors duration-300"
                    style={{ color: isActive ? accent : '#b0b8c8' }}
                  >
                    {label}
                  </p>
                  <h3
                    className="font-headline-md text-headline-md transition-colors duration-300 leading-snug"
                    style={{ color: isActive ? '#1a1c1e' : '#9aa0ac' }}
                  >
                    {title}
                  </h3>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isActive ? '80px' : '0px', opacity: isActive ? 1 : 0, marginTop: isActive ? '10px' : 0 }}
                  >
                    <p className="text-on-surface-variant text-body-md leading-relaxed">{desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right — animated visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {steps.map(({ icon, light, mid, accent }, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: i === activeStep ? 1 : 0,
                    transform: i === activeStep
                      ? 'translateY(0) scale(1)'
                      : i < activeStep
                      ? 'translateY(-32px) scale(0.94)'
                      : 'translateY(32px) scale(0.94)',
                    transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
                    pointerEvents: i === activeStep ? 'auto' : 'none',
                  }}
                >
                  <div
                    className="w-72 h-72 rounded-[40px] relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${mid}, ${light})`,
                      boxShadow: `0 40px 80px ${light}`,
                    }}
                  >
                    <div
                      className="absolute -top-8 -right-8 w-40 h-40 rounded-full"
                      style={{ background: mid }}
                    />
                    <div
                      className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full"
                      style={{ background: light }}
                    />
                    <span
                      className="material-symbols-outlined relative z-10"
                      style={{
                        fontSize: '100px',
                        color: accent,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {steps.map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === activeStep ? '28px' : '8px',
                background: i === activeStep ? step.accent : '#d0d5dd',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
