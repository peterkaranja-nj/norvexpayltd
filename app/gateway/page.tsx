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
                href="/contact"
                className="border-2 border-outline-variant text-on-surface-variant bg-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all text-center"
              >
                Contact Us
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

      {/* ── Features Grid ── */}
      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-2 mb-12">
            <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Features</span>
            <h2 className="font-headline-lg text-headline-lg text-on-background">Everything You Need in One Platform</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: 'credit_card', title: 'Multiple Payment Methods', desc: 'Accept payments via cards, UPI, net banking, wallets, and EMI. Give your customers the freedom to pay how they prefer.' },
            { icon: 'security', title: 'Advanced Security', desc: 'We use industry-leading security and fraud detection to keep your transactions and customer data safe at all times.' },
            { icon: 'code', title: 'Easy Integration', desc: 'Integrate in minutes with our simple APIs, SDKs, and plugins. Well-documented and developer friendly for fast deployment.' },
            { icon: 'analytics', title: 'Real-time Analytics', desc: 'Get real-time insights into your transactions, sales, refunds, and settlements all in one powerful unified dashboard.' },
            { icon: 'sync', title: 'Smart Automation', desc: 'Automate recurring payments, invoices, reminders, and reconciliations to save time and reduce repetitive manual work.' },
            { icon: 'public', title: 'Global Reach', desc: 'Accept payments from customers worldwide with multi-currency support and localized payment options for every region.' },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all group"
              style={{ boxShadow: '0px 4px 20px rgba(204, 136, 0, 0.08)' }}
              data-animate
              data-delay={String((i % 3) * 100)}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                  {icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">{title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
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

            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl border border-outline-variant/20">
                <Image
                  src="/product.png"
                  alt="NorveXPay Dashboard Preview"
                  width={800}
                  height={550}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ boxShadow: '0px 12px 48px rgba(204, 136, 0, 0.1)' }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Path to Live ── */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="text-primary font-label-caps text-label-caps tracking-widest uppercase">The Path to Live</span>
            <h2 className="font-headline-lg text-headline-lg text-on-background mt-2" data-animate>
              Launch in Three Simple Steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-outline-variant/20 -z-10 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(204,136,0,0.5)] progress-line-fill" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">
              {[
                { step: '1', title: 'Sign Up', desc: 'Create your account and get instant access to the sandbox environment to start testing.', active: true, icon: 'how_to_reg' },
                { step: '2', title: 'Integrate', desc: 'Use our SDKs or direct API calls to connect your platform and test with virtual cards.', active: true, icon: 'integration_instructions' },
                { step: '3', title: 'Go Live', desc: 'Complete your profile, switch your API keys to production, and start processing payments.', active: false, icon: 'rocket_launch' },
              ].map(({ step, title, desc, active, icon }, i) => (
                <div key={step} className="flex flex-col items-center" data-animate data-delay={String(i * 150)}>
                  <div className="relative mb-10">
                    <div
                      className={`relative w-24 h-24 rounded-full flex items-center justify-center border-4 border-surface ring-8 transition-all duration-300 hover:scale-110 ${
                        active
                          ? 'accent_gradient text-white ring-primary-fixed/30 animate-step-pulse'
                          : 'bg-surface-container-high text-outline ring-transparent'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[40px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {icon}
                      </span>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-surface border border-outline-variant/30 rounded-full w-8 h-8 flex items-center justify-center text-xs font-black text-primary shadow-sm">
                      {step}
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3">{title}</h3>
                  <p className="text-secondary font-body-md">{desc}</p>
                </div>
              ))}
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
                Join over 500+ forward-thinking businesses using NorveXPay to simplify their financial stack and maximize growth.
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
