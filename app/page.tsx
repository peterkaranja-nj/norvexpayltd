import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import LiveTxMonitor from '@/components/LiveTxMonitor'
import TrustStripe from '@/components/TrustStripe'
import FloatingShapes from '@/components/FloatingShapes'
import ScrollReveal from '@/components/ScrollReveal'
import StickyScrollSection from '@/components/StickyScrollSection'

export const metadata: Metadata = {
  title: 'NorveXPay - Simplify Payments. Grow Your Business.',
  description: 'NorveXPay is a modern payment gateway that helps you accept payments securely, process transactions instantly, and scale your business globally.',
}

const chartBars = [
  { height: '40%', opacity: 'bg-primary/20' },
  { height: '65%', opacity: 'bg-primary/20' },
  { height: '45%', opacity: 'bg-primary/40' },
  { height: '85%', opacity: 'bg-primary/20' },
  { height: '70%', opacity: 'bg-primary/60' },
  { height: '95%', opacity: 'bg-primary/30' },
  { height: '55%', opacity: 'bg-primary/20' },
  { height: '100%', opacity: 'bg-primary/80' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <FloatingShapes />
        {/* Background image with light overlay */}
        <div className="absolute inset-0 -z-10" data-parallax data-speed="0.2">
          <Image
            src="/hero-background.jpg"
            fill
            className="object-cover object-center"
            priority
            alt=""
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-surface/90" />
        </div>

        <div className="px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-8 font-semibold text-sm border border-primary/20"
                style={{ animation: 'slide-up-fade 0.6s ease-out 0.05s both' }}
              >
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                Secure, Fast &amp; Globally Trusted
              </div>

              <h1
                className="font-headline-lg text-headline-lg-mobile lg:font-display-xl lg:text-display-xl text-on-background mb-6 leading-tight"
                style={{ animation: 'slide-up-fade 0.7s ease-out 0.2s both' }}
              >
                Simplify Payments.{' '}
                <span className="text-primary">Grow Your Business.</span>
              </h1>

              <p
                className="text-body-lg font-body-lg text-secondary max-w-xl mb-10 leading-relaxed"
                style={{ animation: 'slide-up-fade 0.7s ease-out 0.35s both' }}
              >
                NorveXPay is a modern payment gateway that helps you accept payments securely, process transactions instantly, and scale your business globally.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                style={{ animation: 'slide-up-fade 0.7s ease-out 0.5s both' }}
              >
                <Link
                  href="/contact"
                  className="accent_gradient text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Get Started
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link
                  href="/contact"
                  className="glass-card border border-outline-variant/40 text-on-surface-variant px-10 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  Talk to Sales
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div
                className="flex flex-wrap items-center gap-6 opacity-70"
                style={{ animation: 'slide-up-fade 0.7s ease-out 0.65s both' }}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">storefront</span>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">25,000+ Merchants</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">language</span>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Global Coverage</span>
                </div>
              </div>
            </div>

            {/* Right — Live Transaction Monitor */}
            <div
              className="relative flex items-center justify-center"
              style={{ animation: 'slide-up-fade 0.8s ease-out 0.4s both' }}
            >
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative w-full max-w-sm z-10">
                <LiveTxMonitor />
              </div>
              {/* Floating PCI badge */}
              <div
                className="absolute -bottom-5 -left-4 glass-card px-4 py-2.5 rounded-xl float-shadow hidden md:flex items-center gap-2 z-20"
                style={{ animation: 'slide-up-fade 0.6s ease-out 0.85s both' }}
              >
                <span className="material-symbols-outlined text-primary text-sm">security</span>
                <span className="text-xs font-semibold text-on-background">PCI DSS Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Stripe ── */}
      <div className="mt-16 lg:mt-24">
        <TrustStripe />
      </div>

      {/* ── Everything You Need to Grow ── */}
      <section className="py-24 px-gutter">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Features</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
                Everything You Need to <span className="text-primary">Grow</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
                One platform, endless possibilities. We provide the technical building blocks for any payment flow.
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Global Scale, Local Reach — wide */}
            <div className="md:col-span-8 p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow flex flex-col justify-between relative overflow-hidden group border border-outline-variant/20" data-animate data-delay="0">
              <Image
                src="/worldmap.png"
                alt=""
                fill
                className="object-cover object-center opacity-[0.38] group-hover:opacity-[0.55] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                unoptimized
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '32px' }}>
                  public
                </span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-3">Global Scale, Local Reach</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Accept 135+ currencies and dozens of local payment methods across 47 countries with a single integration.
                </p>
              </div>
              <div className="relative z-10 mt-10 pt-8 border-t border-outline-variant/20 flex flex-wrap gap-4">
                {['Instant Onboarding', 'Direct Payouts'].map((tag) => (
                  <div key={tag} className="bg-surface-container/80 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-body-sm font-semibold text-on-background">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank-Grade Security — narrow, blue gradient */}
            <div
              className="md:col-span-4 p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow flex flex-col overflow-hidden"
              data-animate data-delay="100"
              style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
            >
              <span className="material-symbols-outlined text-white mb-6 block" style={{ fontSize: '32px' }}>
                verified_user
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Bank-Grade Security</h3>
              <p className="font-body-md text-body-md text-white/80 mb-8">
                PCI-DSS Level 1 certified infrastructure with real-time machine learning fraud detection.
              </p>
              <div className="mt-auto rounded-xl overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNIaEyVctLWaCTiN_G6831V1JolzNdUTis-fvboC6NykiKyLN4GFxwmbnOQXMSfOQW4m8js5Stf9g77oQoSFhG8CKHc8KDKDoVGVo6rOCWF_DqmJfHvLyysnjKIdStcDDHk3klksylP_rf1wOkdV6SFrJX4yveUJXiVMOkVH9S2ejutWrpVlPfh7QVjLzrYSvKhwGZghHeZkI086qNoaXLOAJfgFoqOJv0vIZc4nCypc1544P0XE_Pw73D66l6BlROBixMaaHFomI"
                  alt="Security Infrastructure"
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover opacity-30 mix-blend-overlay"
                  unoptimized
                />
              </div>
            </div>

            {/* Easy Integration — narrow */}
            <div className="md:col-span-4 glass-card p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow" data-animate data-delay="0">
              <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '32px' }}>
                integration_instructions
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-3">Easy Integration</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Go live in minutes with our clean REST APIs, SDKs, and pre-built plugins for all major platforms.
              </p>
            </div>

            {/* API-First Design — wide, with code block */}
            <div className="md:col-span-8 glass-card p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow" data-animate data-delay="100">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '32px' }}>
                    code
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-3">API-First Design</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Engineered for developers by developers. Comprehensive SDKs for Node.js, Python, Go, and Ruby.
                  </p>
                </div>
                <div className="flex-1 bg-on-background rounded-xl p-6 overflow-x-auto">
                  <pre className="font-code-snippet text-code-snippet text-[#c9d1d9] whitespace-pre">{`const pay = require('@norvexpay/sdk');

await pay.charges.create({
  amount: 2000,
  currency: 'usd',
  source: 'tok_visa',
});`}</pre>
                </div>
              </div>
            </div>

            {/* Lightning Fast — half width, dark card */}
            <div className="md:col-span-6 bg-on-background p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow flex flex-col" data-animate data-delay="0">
              <span className="material-symbols-outlined text-primary-fixed-dim mb-6 block" style={{ fontSize: '32px' }}>
                bolt
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Lightning Fast</h3>
              <p className="font-body-md text-body-md text-white/70 mb-8">
                Process thousands of transactions per second with our high-performance global infrastructure designed for peak loads.
              </p>
              <div className="mt-auto flex gap-8">
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-primary-fixed-dim">10K+</div>
                  <div className="font-label-caps text-label-caps text-white/50 uppercase tracking-widest mt-1">TPS</div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-primary-fixed-dim">99.99%</div>
                  <div className="font-label-caps text-label-caps text-white/50 uppercase tracking-widest mt-1">Uptime</div>
                </div>
              </div>
            </div>

            {/* 24/7 Expert Support — half width */}
            <div className="md:col-span-6 glass-card p-6 sm:p-8 lg:p-12 rounded-2xl level-1-shadow flex flex-col" data-animate data-delay="150">
              <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '32px' }}>
                support_agent
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-3">24/7 Expert Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Our dedicated team of payment experts is available around the clock via chat, email, or phone.
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                {['Live Chat', 'Email', 'Phone'].map((ch) => (
                  <div key={ch} className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-body-sm font-semibold text-primary">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Scroll Section ── */}
      <StickyScrollSection />

      {/* ── Real-time Revenue Monitoring ── */}
      <section className="relative py-24 px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="glass-card rounded-2xl level-2-shadow overflow-hidden border border-white/50">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left: description */}
              <div className="p-6 sm:p-8 lg:p-12 lg:border-r border-outline-variant/20 flex flex-col justify-center">
                <h2 className="font-headline-md text-headline-md text-on-background mb-6" data-animate>
                  Real-time Revenue Monitoring
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-10">
                  Keep your finger on the pulse of your business with our lightning-fast transaction stream and live reporting dashboard.
                </p>
                <ul className="space-y-4">
                  {['Live stream transactions', 'Automated reconciliation', 'Custom alert triggers'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span className="text-body-sm font-semibold text-on-background">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: chart */}
              <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12 bg-surface-bright">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
                  <div className="flex gap-10">
                    <div>
                      <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-1">Total Volume</div>
                      <div className="font-headline-md text-headline-md font-bold text-primary">$24.8M</div>
                    </div>
                    <div>
                      <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-1">Active Users</div>
                      <div className="font-headline-md text-headline-md font-bold text-secondary">84.2K</div>
                    </div>
                  </div>
                  <div className="flex bg-surface-container p-1 rounded-lg">
                    <button className="px-5 py-1.5 bg-surface rounded-md text-body-sm font-bold shadow-sm text-on-background">24h</button>
                    <button className="px-5 py-1.5 text-on-surface-variant text-body-sm hover:text-primary transition-colors">7d</button>
                    <button className="px-5 py-1.5 text-on-surface-variant text-body-sm hover:text-primary transition-colors">30d</button>
                  </div>
                </div>
                <div className="h-64 flex items-end gap-3 w-full">
                  {chartBars.map(({ height, opacity }, i) => (
                    <div key={i} className={`flex-1 rounded-t-lg transition-all hover:bg-primary ${opacity}`} style={{ height }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-32 px-gutter">
        <div className="max-w-container-max mx-auto bg-on-background rounded-[40px] p-8 sm:p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[150px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/20 blur-[150px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">
                Ready to scale your global business?
              </h2>
              <p className="text-surface-variant text-body-lg leading-relaxed opacity-80">
                Join over 500+ forward-thinking businesses using NorveXPay to simplify their financial stack and maximize growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-white text-on-background px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container transition-all text-center"
              >
                Talk to Sales
              </Link>
              <Link
                href="/contact"
                className="accent_gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all text-center"
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
