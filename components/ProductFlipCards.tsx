'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 'gateway',
    name: 'Universal Payment Gateway',
    tagline: 'One integration. 195 countries. Every payment method that matters.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    icon: 'payments',
    description:
      'Process payments across 195 countries with a single API. Our intelligent gateway manages multi currency settlement, local regulatory compliance and dynamic acquiring so your business scales globally without the complexity.',
    features: [
      '135 currencies converted automatically',
      'Local acquiring in 47 countries',
      'Adaptive checkout localisation',
      '99.99% uptime SLA guaranteed',
    ],
    href: '/gateway',
    cta: 'Explore Gateway',
    accent: 'from-[#5C3D00] via-[#9A6800] to-[#E8A020]',
  },
  {
    id: 'digital-wallet',
    name: 'Digital Wallet Collections',
    tagline: 'Where your customers already keep their money.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80',
    icon: 'account_balance_wallet',
    description:
      'Seamlessly collect payments from popular digital wallets including M-Pesa, Airtel Money, T-Kash, and more. NorveXPay makes it fast and effortless for businesses to receive instant payments directly into their accounts with minimal fees and zero hassle.',
    features: [
      'M-Pesa, Airtel Money, T-Kash and more',
      'Instant payment confirmation',
      'Minimal fees on every transaction',
      'Zero hassle setup and onboarding',
    ],
    href: '/contact',
    cta: 'Start Collecting',
    accent: 'from-[#4A2800] via-[#7A4800] to-[#CC8800]',
  },
  {
    id: 'payins',
    name: 'Payins',
    tagline: 'Accept money from anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    icon: 'move_to_inbox',
    description:
      'Accept payments from customers across the globe through multiple channels — cards, bank transfers, mobile money and digital wallets — all consolidated and settled directly into your account without the operational headache.',
    features: [
      'Cards, bank transfers and wallets',
      'Global acceptance across 195 countries',
      'Unified settlement into one account',
      'Detailed reporting and reconciliation',
    ],
    href: '/contact',
    cta: 'Accept Payments',
    accent: 'from-[#3D2600] via-[#8C6200] to-[#E8A020]',
  },
  {
    id: 'payouts',
    name: 'Payouts',
    tagline: 'Pay anyone, anywhere, in any currency.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80',
    icon: 'send',
    description:
      'Pay suppliers, freelancers, staff and partners anywhere in the world. Schedule bulk disbursements, send individual transfers and manage every outgoing payment from one clean dashboard with full audit trails.',
    features: [
      'Bulk and individual disbursements',
      'Reach 195 countries and territories',
      'Mobile money, bank and wallet payouts',
      'Real time status tracking',
    ],
    href: '/contact',
    cta: 'Send Payments',
    accent: 'from-[#5C3D00] via-[#B07800] to-[#FFD060]',
  },
]

const track = [...products, ...products]

export default function ProductFlipCards() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 inset-y-0 w-28 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 inset-y-0 w-28 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

      <div
        className="flex items-stretch gap-6 w-max"
        style={{
          animation: 'marquee 48s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {track.map(({ id, name, tagline, image, icon, description, features, href, cta, accent }, i) => (
          <div
            key={`${id}-${i}`}
            className="flip-card flex-shrink-0 cursor-pointer"
            style={{ width: '380px', height: '500px' }}
          >
            <div className="flip-card-inner">

              {/* Front */}
              <div className="flip-card-face">
                <Image src={image} alt={name} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div
                  className="absolute top-6 left-6 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(204,136,0,0.88)', backdropFilter: 'blur(8px)' }}
                >
                  <span
                    className="material-symbols-outlined text-white text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-white font-extrabold text-xl mb-2 leading-snug">{name}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{tagline}</p>
                  <div className="flex items-center gap-2 mt-4 text-white/45 text-xs">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      rotate_right
                    </span>
                    Hover to explore
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className={`flip-card-face flip-card-back flex flex-col justify-between p-7 text-white bg-gradient-to-br ${accent}`}
              >
                <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                    <span
                      className="material-symbols-outlined text-white text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-lg mb-3 leading-snug">{name}</h3>
                  <p className="text-white/82 leading-relaxed text-sm mb-5">{description}</p>

                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="material-symbols-outlined text-sm text-yellow-300 shrink-0 mt-0.5"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={href}
                  className="relative z-10 flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
                >
                  {cta}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
