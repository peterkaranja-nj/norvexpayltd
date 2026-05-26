import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FloatingShapes from '@/components/FloatingShapes'
import ScrollReveal from '@/components/ScrollReveal'
import ProductFlipCards from '@/components/ProductFlipCards'

export const metadata: Metadata = {
  title: 'Products - Secure Payment Solutions',
  description: 'Explore NorveXPay\'s suite of payment products. From enterprise payment gateway to mobile money collection — built for businesses of all sizes.',
}

const whyChoose = [
  {
    icon: 'groups',
    title: 'Higher Success Rate',
    desc: 'Our smart routing technology ensures maximum transaction success by dynamically switching between multiple gateways.',
  },
  {
    icon: 'sell',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Pay only for what you use with clear, upfront pricing that scales with your business volume.',
  },
  {
    icon: 'terminal',
    title: 'Developer Friendly',
    desc: 'Clean APIs, detailed documentation, and SDKs for all major platforms. Build your custom checkout in less than an hour.',
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    desc: 'Our dedicated expert support team is always here to help you via chat, email, or phone whenever you need us.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <style>{`
        .flip-card { perspective: 1200px; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.85s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        .flip-card-back { transform: rotateY(180deg); }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-gutter max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        <FloatingShapes />
        <div className="space-y-6 lg:order-2">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
            <span
              className="material-symbols-outlined text-primary text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <span className="text-primary font-label-caps text-label-caps">Powerful. Flexible. Global.</span>
          </div>

          <h1 className="font-headline-lg text-headline-lg-mobile lg:font-display-xl lg:text-display-xl text-on-background">
            Our Products
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            A complete suite of payment tools engineered for global commerce. Accept payments on every continent, reach mobile-first markets, and scale without limits.
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            <Link
              href="/contact"
              className="text-white px-10 py-6 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
            >
              Get Started
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/gateway"
              className="bg-surface border border-primary text-primary px-10 py-6 rounded-xl font-semibold hover:bg-primary/5 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative group lg:order-1">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10" />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="NorveXPay Products Suite"
              width={700}
              height={525}
              className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03] rounded-2xl"
              style={{ boxShadow: '0px 12px 40px rgba(204, 136, 0, 0.15)' }}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
          {/* Floating success card */}
          <div
            className="absolute -bottom-6 -right-4 glass-card p-5 rounded-xl hidden md:block"
            style={{ boxShadow: '0px 12px 36px rgba(204, 136, 0, 0.15)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-secondary uppercase">Success Rate</p>
                <p className="font-headline-md text-headline-md text-on-surface">99.98%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products — marquee flip cards ── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal>
            <div className="text-center space-y-2 mb-12">
              <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">What We Offer</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Built for Every Market</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mt-3">
                Four products. One platform. Hover any card to see what is inside.
              </p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>
          </ScrollReveal>
        </div>

        <ProductFlipCards />
      </section>

      {/* ── Why Choose NorveXPay ── */}
      <section className="py-20 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 scale-150 group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFnt70tsChuecCDMf1CHBO9cpNW_R83CLKbawO2TzU61QaQtbIq3PXGu1SXx0isrdZJWbbhhEruNqrgQQCy-2Mu_bRsWlRZAPPgheazIGWMQY6B-tGmZxRa7hY1YMO7mlevAfesxPMID9QtxssGCJCnU7SEbRiCbCu-FbzHMwth9UN2eiMYBDmudjA45HX8i3recaI-UUnyq82KKc3tEHET-iAM2mu5CLr0d_B_cadlU2hbwt1J5IG9lEsnJXUCrP-MokTiut4ZeY"
                alt="Financial Security Illustration"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ boxShadow: '0 20px 60px rgba(204,136,0,0.12)' }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-12 lg:sticky lg:top-24 lg:self-start">
            <div>
              <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">
                Why Choose NorveXPay
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
                Built to help your business grow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map(({ icon, title, desc }, i) => (
                <div key={title} className="space-y-3" data-animate data-delay={String(i * 100)}>
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-primary p-2 bg-surface-container rounded-full"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                    <h4 className="font-bold text-[18px]">{title}</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-gutter">
        <div
          className="max-w-container-max mx-auto rounded-3xl p-8 sm:p-12 lg:p-20 text-white text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white" />
              ))}
            </div>
          </div>

          <h2 className="font-headline-lg text-headline-lg lg:text-5xl font-extrabold mb-6 relative z-10">
            Ready to go global?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mx-auto mb-12 relative z-10">
            Join thousands of businesses across 195+ countries using NorveXPay to power their payments and expand into new markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Get Started Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
