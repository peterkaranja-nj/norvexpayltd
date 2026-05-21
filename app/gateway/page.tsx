import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FloatingShapes from '@/components/FloatingShapes'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Payment Gateway - Secure & Global Payments',
  description: 'Accept 135+ currencies and dozens of local payment methods with a single integration. Boost conversion rates with NorveXPay\'s optimized checkout experience.',
}

export default function GatewayPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-4 pb-20 px-gutter max-w-container-max mx-auto overflow-visible">
        <FloatingShapes />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-8 font-semibold text-sm border border-primary/20">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              World-Class Infrastructure
            </div>

            <h1 className="font-headline-lg text-headline-lg-mobile lg:font-display-xl lg:text-display-xl text-on-background mb-8">
              Unified Payment <br /> Solutions for Global{' '}
              <span className="text-primary">Commerce.</span>
            </h1>

            <p className="text-body-lg font-body-lg text-secondary max-w-xl mb-12 leading-relaxed">
              Accept 135+ currencies and dozens of local payment methods with a single integration. Boost conversion rates with NorveXPay&apos;s optimized checkout experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all text-center"
                style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
              >
                Start Processing Now
              </Link>
              <Link
                href="/developers"
                className="border-2 border-outline-variant text-on-surface-variant bg-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all text-center"
              >
                View API Docs
              </Link>
            </div>

          </div>

          {/* Right — Modern Credit Card */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-tertiary/10 blur-[100px] rounded-full" />

            <div className="relative w-full max-w-md perspective-1000">
              {/* Credit Card */}
              <div
                className="rounded-3xl relative z-20 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-700"
                style={{
                  background: 'linear-gradient(135deg, #5C3D00 0%, #9A6800 45%, #E8A020 100%)',
                  boxShadow: '0px 24px 64px rgba(184, 120, 0, 0.45)',
                  aspectRatio: '1.586',
                  padding: '7%',
                }}
              >
                {/* Decorative circles */}
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full bg-white/5" />

                {/* Top row: brand + contactless */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-white font-bold text-lg tracking-tight">
                    NorveX<span className="text-yellow-200">Pay</span>
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8.5 12c0-1.933 1.567-3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 12c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>

                {/* EMV Chip */}
                <div
                  className="w-12 h-9 rounded-md mb-6 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #c8a84b 0%, #f0d070 50%, #b8943b 100%)' }}
                >
                  <div className="w-full h-full rounded-md grid grid-cols-2 grid-rows-3 gap-px p-1 opacity-50">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="bg-amber-800/60 rounded-[1px]" />
                    ))}
                  </div>
                </div>

                {/* Card Number */}
                <p className="font-mono text-white text-xl tracking-[0.2em] mb-6 relative z-10">
                  •••• •••• •••• <span className="text-yellow-200">4242</span>
                </p>

                {/* Bottom row */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-amber-200/70 text-[10px] uppercase tracking-widest mb-1">Card Holder</p>
                    <p className="text-white font-semibold tracking-wide text-sm">JAMES DONOVAN</p>
                  </div>
                  <div>
                    <p className="text-amber-200/70 text-[10px] uppercase tracking-widest mb-1">Expires</p>
                    <p className="text-white font-semibold text-sm">12/28</p>
                  </div>
                  <span className="text-white font-extrabold text-2xl italic tracking-tight">VISA</span>
                </div>
              </div>

              {/* Floating success card */}
              <div
                className="absolute -bottom-12 -right-8 p-6 rounded-2xl w-64 z-30 transform translate-x-4"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-6 bg-amber-600 rounded" />
                  <div className="font-code-snippet text-xs">**** 4242</div>
                </div>
                <div className="text-2xl font-bold mb-1">$4,250.00</div>
                <div className="text-[10px] text-tertiary font-bold uppercase tracking-wider">Payment Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Developer Focus (Dark) ── */}
      <section className="py-24 bg-inverse-surface text-white">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Built for developers, <br />
              <span className="text-primary">by developers.</span>
            </h2>
            <p className="text-body-lg font-body-lg text-surface-variant/80 mb-10">
              Integrate our powerful API with just a few lines of code. Support for all modern frameworks and languages out of the box.
            </p>
            <div className="space-y-4">
              {[
                'SDKs for Node.js, Python, Ruby, and Go',
                'Webhooks for real-time notifications',
                'Sandbox environment for safe testing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div style={{ boxShadow: '0 0 20px rgba(204, 136, 0, 0.15)' }} className="rounded-2xl border border-white/10 bg-[#0a0c10] p-1 overflow-hidden">
            <div className="bg-[#1c1f26] px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="mx-auto text-xs text-white/40 font-code-snippet">checkout.js</div>
            </div>
            <div className="p-6 font-code-snippet text-sm overflow-x-auto">
              <pre className="text-blue-400">
                {'const '}
                <span className="text-white">norvexpay</span>
                {' = '}
                <span className="text-yellow-400">require</span>
                {'('}
                <span className="text-green-400">&apos;@norvexpay/sdk&apos;</span>
                {');'}
              </pre>
              <pre className="mt-2 text-white">{'const session = await norvexpay.sessions.create({'}</pre>
              <pre className="text-surface-variant">
                {'  payment_method_types: ['}
                <span className="text-green-400">&apos;card&apos;</span>
                {'],'}
              </pre>
              <pre className="text-surface-variant">{'  line_items: [{'}</pre>
              <pre className="text-surface-variant">
                {'    price_data: { currency: '}
                <span className="text-green-400">&apos;usd&apos;</span>
                {', product: '}
                <span className="text-green-400">&apos;prod_id&apos;</span>
                {' },'}
              </pre>
              <pre className="text-surface-variant">{'    quantity: 1,'}</pre>
              <pre className="text-surface-variant">{'  }],'}</pre>
              <pre className="text-white">
                {'  mode: '}
                <span className="text-green-400">&apos;payment&apos;</span>
                {','}
              </pre>
              <pre className="text-white">{'});'}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Capabilities Bento Grid ── */}
      <section className="py-32 px-gutter max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-6">Engineered for the modern web</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Sophisticated payment infrastructure disguised as simplicity. Scaling with you from day one to billion-dollar revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[240px]">
          {/* Global Acceptance — Large (8 cols, 2 rows) */}
          <div
            className="md:col-span-8 md:row-span-2 glass-card p-10 rounded-3xl relative group overflow-hidden hover:-translate-y-1 transition-all"
            data-animate data-delay="0"
            style={{ boxShadow: '0px 4px 24px rgba(204, 136, 0, 0.06)' }}
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">public</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-6">Global Card Acceptance</h3>
              <p className="text-on-surface-variant text-lg mb-auto max-w-lg leading-relaxed">
                Accept all major credit and debit cards from 195+ countries. We handle cross-border complexities and currency conversion automatically at mid-market rates.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {/* Visa */}
                <div className="flex items-center justify-center h-11 px-5 rounded-lg" style={{ background: '#1A1F71' }}>
                  <span className="font-black italic text-xl tracking-widest text-white" style={{ fontFamily: 'Georgia, serif' }}>VISA</span>
                </div>
                {/* Mastercard */}
                <div className="flex items-center gap-2 h-11 px-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                  <div className="relative flex items-center shrink-0">
                    <div className="w-7 h-7 rounded-full bg-[#EB001B]" />
                    <div className="w-7 h-7 rounded-full bg-[#F79E1B] -ml-3.5 opacity-90" />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 lowercase tracking-tight">mastercard</span>
                </div>
                {/* American Express */}
                <div className="flex items-center justify-center h-11 px-4 rounded-lg" style={{ background: '#016FD0' }}>
                  <span className="text-white font-bold text-[11px] tracking-wider leading-tight text-center">AMERICAN<br/>EXPRESS</span>
                </div>
                {/* Discover */}
                <div className="flex items-center gap-2 h-11 px-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                  <span className="font-black text-sm text-gray-900 tracking-tight">DISCOVER</span>
                  <div className="w-5 h-5 rounded-full shrink-0" style={{ background: '#F76F20' }} />
                </div>
                {/* JCB */}
                <div className="flex items-center h-11 px-3 rounded-lg bg-white border border-gray-100 shadow-sm gap-0.5">
                  <div className="w-6 h-7 rounded flex items-center justify-center" style={{ background: '#003087' }}>
                    <span className="text-white font-black text-sm">J</span>
                  </div>
                  <div className="w-6 h-7 rounded flex items-center justify-center" style={{ background: '#CC0000' }}>
                    <span className="text-white font-black text-sm">C</span>
                  </div>
                  <div className="w-6 h-7 rounded flex items-center justify-center" style={{ background: '#007940' }}>
                    <span className="text-white font-black text-sm">B</span>
                  </div>
                </div>
                {/* UnionPay */}
                <div className="flex items-center justify-center h-11 px-5 rounded-lg gap-1" style={{ background: '#CC0000' }}>
                  <span className="text-white font-extrabold text-sm tracking-wide">Union</span>
                  <span className="font-extrabold text-sm tracking-wide" style={{ color: '#FFD700' }}>Pay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recurring Billing — Gradient (4 cols, 2 rows) */}
          <div
            className="md:col-span-4 md:row-span-2 p-10 rounded-3xl shadow-2xl text-white flex flex-col justify-between group"
            data-animate data-delay="100"
            style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
          >
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-4xl group-hover:rotate-180 transition-transform duration-500">
                  sync
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-6 leading-tight">
                Recurring <br /> Subscriptions
              </h3>
              <p className="opacity-80 text-lg leading-relaxed">
                Manage trials, tiers, and flexible billing cycles with our intelligent subscription engine.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-primary w-full py-4 rounded-xl font-bold text-base hover:shadow-lg transition-all mt-8 text-center block"
            >
              Explore Billing API
            </Link>
          </div>

          {/* Smart Routing */}
          <div
            className="md:col-span-4 glass-card p-8 rounded-3xl hover:-translate-y-1 transition-all"
            data-animate data-delay="0"
            style={{ boxShadow: '0px 4px 24px rgba(204, 136, 0, 0.06)' }}
          >
            <div className="bg-tertiary-container/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary text-2xl">route</span>
            </div>
            <h3 className="font-bold text-xl mb-3">Smart Routing</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Dynamically route transactions across banks to ensure highest success rates.
            </p>
          </div>

          {/* Hosted Checkout */}
          <div className="md:col-span-4 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/20 hover:-translate-y-1 transition-all" data-animate data-delay="100">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart_checkout</span>
            </div>
            <h3 className="font-bold text-xl mb-3">Hosted Checkout</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Pre-built, conversion-optimized checkout pages launched in minutes.
            </p>
          </div>

          {/* Embedded UI */}
          <div
            className="md:col-span-4 glass-card p-8 rounded-3xl hover:-translate-y-1 transition-all"
            data-animate data-delay="200"
            style={{ boxShadow: '0px 4px 24px rgba(204, 136, 0, 0.06)' }}
          >
            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">web_asset</span>
            </div>
            <h3 className="font-bold text-xl mb-3">Embedded UI</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Maintain full brand control with secure, PCI-compliant payment fields.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dashboard Section ── */}
      <section
        className="py-16 lg:py-32 backdrop-blur-sm border-y border-outline-variant/30"
        style={{ background: 'rgba(255,255,255,0.5)' }}
      >
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-headline-lg text-headline-lg mb-8">
                Manage everything in <span className="text-primary">real-time.</span>
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-12 leading-relaxed">
                The NorveXPay dashboard gives you total control. Monitor success rates, analyze payment trends, and manage refunds with an intuitive interface designed for speed and reliability.
              </p>
              <div className="space-y-10">
                {[
                  {
                    icon: 'analytics',
                    bgColor: 'bg-primary/10',
                    iconColor: 'text-primary',
                    title: 'Deep Analytics',
                    desc: 'Break down your revenue by currency, payment method, and region with customizable reports.',
                  },
                  {
                    icon: 'security',
                    bgColor: 'bg-tertiary/10',
                    iconColor: 'text-tertiary',
                    title: 'Fraud Protection',
                    desc: 'Machine-learning models that block suspicious transactions before they happen.',
                  },
                ].map(({ icon, bgColor, iconColor, title, desc }) => (
                  <div key={title} className="flex items-start gap-6">
                    <div className={`${bgColor} p-3 rounded-xl ${iconColor} shrink-0`}>
                      <span className="material-symbols-outlined text-2xl">{icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{title}</h4>
                      <p className="text-secondary">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] opacity-40" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHspb3Tc4hKWIPoWCUvnOLOnNqAsmpvhJwtzb-U8yJ4HUtSlIdGuBC3IokyOq6qp2ETIgRXIzAwqi79DnOM3HDC0iIxrYDwCf8xa2ocAZ3USSQwH6tA0DO5jE1_uniQ1w2UUXMeJFHrVQlzxVi9J3pfpiWOfirjLxWS7PJhi8CfgQU3Bycd1hEkWs-j0VoSXYvI6uRwYqyzlPiRMcErc8h6bNHmDgsLmQZwkbAHT8UKdjoCLHeTGTXB8fgqd5Id0RtaiKOPmbxeVc"
                alt="Dashboard Preview"
                width={800}
                height={550}
                className="relative rounded-3xl border border-outline-variant/20 w-full"
                style={{ boxShadow: '0px 12px 48px rgba(204, 136, 0, 0.1)' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (Dark) ── */}
      <section className="py-16 lg:py-32 px-gutter">
        <div className="max-w-container-max mx-auto bg-on-background rounded-[40px] p-8 sm:p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[150px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/20 blur-[150px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-white mb-8">
                Ready to scale your global business?
              </h2>
              <p className="text-surface-variant text-body-lg leading-relaxed opacity-80">
                Join over 10,000+ forward-thinking businesses using NorveXPay to simplify their financial stack and maximize growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-white text-on-background px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container transition-all text-center"
              >
                Talk to Sales
              </Link>
              <Link
                href="/contact"
                className="text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all text-center"
                style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
