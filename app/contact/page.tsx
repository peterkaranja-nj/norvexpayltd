'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    q: 'How do I integrate NorveXPay into my application?',
    a: 'Integration is simple with our comprehensive SDKs and RESTful API. You can find detailed documentation, code samples in 5+ languages, and a quick-start guide in our developer portal. Most integrations take less than an hour to set up in a sandbox environment.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'We support all major credit cards (Visa, Mastercard, Amex), digital wallets (Apple Pay, Google Pay), and over 50+ local payment methods globally, including SEPA, iDEAL, and AliPay.',
  },
  {
    q: 'Is NorveXPay secure for high-volume transactions?',
    a: 'Absolutely. We are PCI DSS Level 1 compliant, the highest security standard in the payments industry. All transactions are protected by end-to-end encryption and our proprietary 24/7 fraud monitoring system.',
  },
  {
    q: 'How can I contact technical support?',
    a: 'Technical support is available 24/7 for our Enterprise clients via dedicated Slack channels. For Standard accounts, you can reach out through the form above or via our live chat located in the dashboard.',
  },
]

const topics = [
  { value: 'general', label: 'General Inquiry', icon: 'chat' },
  { value: 'support', label: 'Technical Support', icon: 'code' },
  { value: 'sales', label: 'Sales & Partnerships', icon: 'handshake' },
  { value: 'billing', label: 'Billing Questions', icon: 'receipt_long' },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)
  const [topic, setTopic] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      {/* ── Hero + Form ── */}
      <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span className="font-label-caps text-label-caps">24/7 SUPPORT AVAILABLE</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile lg:font-headline-lg text-on-surface leading-tight">
              We&apos;d Love to Hear <br />
              <span className="text-primary">From You</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Have a question or need help? Our team of payment experts is here for you. We typically respond to all inquiries within 2 hours.
            </p>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30" data-animate data-delay="0">
                <div className="w-12 h-12 flex items-center justify-center accent_gradient rounded-xl text-white shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">EMAIL US</p>
                  <a
                    href="mailto:support@norvexpay.com"
                    className="font-semibold text-on-surface hover:text-primary text-sm transition-colors"
                  >
                    support@norvexpay.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30" data-animate data-delay="100">
                <div className="w-12 h-12 flex items-center justify-center accent_gradient rounded-xl text-white shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">CALL US</p>
                  <p className="font-semibold text-on-surface text-sm">+1 (555) 982-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30 sm:col-span-2" data-animate data-delay="200">
                <div className="w-12 h-12 flex items-center justify-center accent_gradient rounded-xl text-white shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">OFFICE ADDRESS</p>
                  <p className="font-semibold text-on-surface text-sm">
                    Norvex Pay Ltd, 12 Old Bond Street, Mayfair, London, W1S 4PW
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(204,136,0,0.10)', border: '1px solid rgba(204,136,0,0.14)' }}>
            {/* Gold accent bar */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #B07800 0%, #E8A020 60%, #FFD166 100%)' }} />

            <div className="bg-white px-8 pt-8 pb-10 md:px-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="material-symbols-outlined text-tertiary text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3">Message Sent!</h3>
                  <p className="text-secondary text-body-md">Our team will get back to you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="font-headline-md text-headline-md text-on-surface">Send us a message</h3>
                    <p className="text-on-surface-variant text-body-sm mt-1">We typically respond within 2 business hours.</p>
                  </div>

                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Full Name</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline/60 pointer-events-none">person</span>
                          <input
                            type="text"
                            placeholder="Jane Smith"
                            required
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-body-md text-on-surface placeholder:text-outline/40"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Email Address</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline/60 pointer-events-none">mail</span>
                          <input
                            type="email"
                            placeholder="jane@company.com"
                            required
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-body-md text-on-surface placeholder:text-outline/40"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                        Company <span className="normal-case font-normal tracking-normal text-outline/50">(optional)</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline/60 pointer-events-none">business</span>
                        <input
                          type="text"
                          placeholder="Your company name"
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-body-md text-on-surface placeholder:text-outline/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">How Can We Help?</label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen((o) => !o)}
                          className={`w-full flex items-center gap-3 pl-10 pr-4 py-3.5 rounded-xl text-left transition-all outline-none ${
                            dropdownOpen
                              ? 'bg-white border border-primary/40 ring-2 ring-primary/10'
                              : 'bg-[#F4F5F7] border border-transparent'
                          }`}
                        >
                          <span className="material-symbols-outlined absolute left-3.5 text-[18px] text-outline/60 pointer-events-none">help_outline</span>
                          {topic ? (
                            <span className="text-body-md text-on-surface flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[16px]">
                                {topics.find((t) => t.value === topic)?.icon}
                              </span>
                              {topics.find((t) => t.value === topic)?.label}
                            </span>
                          ) : (
                            <span className="text-body-md text-outline/40">Choose a topic…</span>
                          )}
                          <span
                            className="material-symbols-outlined ml-auto text-[18px] text-outline/60 transition-transform duration-200"
                            style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          >
                            expand_more
                          </span>
                        </button>

                        {dropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl overflow-hidden z-50" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid rgba(204,136,0,0.12)' }}>
                            {topics.map(({ value, label, icon }) => (
                              <button
                                key={value}
                                type="button"
                                onClick={() => { setTopic(value); setDropdownOpen(false) }}
                                className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors border-b border-outline-variant/10 last:border-0 ${
                                  topic === value
                                    ? 'bg-primary/8 text-primary'
                                    : 'hover:bg-[#F4F5F7] text-on-surface'
                                }`}
                              >
                                <span
                                  className={`material-symbols-outlined text-[20px] ${topic === value ? 'text-primary' : 'text-outline/60'}`}
                                  style={{ fontVariationSettings: topic === value ? "'FILL' 1" : "'FILL' 0" }}
                                >
                                  {icon}
                                </span>
                                <span className="text-body-md font-medium">{label}</span>
                                {topic === value && (
                                  <span className="material-symbols-outlined text-primary ml-auto text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    check_circle
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Your Message</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-[14px] text-[18px] text-outline/60 pointer-events-none">chat_bubble_outline</span>
                        <textarea
                          rows={5}
                          placeholder="Tell us what you need — we're listening…"
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-y min-h-[120px] text-body-md text-on-surface placeholder:text-outline/40"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 text-body-lg group"
                      style={{ background: 'linear-gradient(135deg, #B07800 0%, #E8A020 100%)' }}
                    >
                      Send Message
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Section ── */}
      <section className="py-20 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-[300px] rounded-2xl overflow-hidden group">
              <Image
                src="/hero-background.jpg"
                alt="NorveXPay London Office"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/30 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
                  <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest">Mayfair, London</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white">Where Finance Meets Innovation</h3>
                <p className="font-body-sm text-body-sm text-white/70 mt-1">12 Old Bond Street · W1S 4PW</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-10 flex flex-col justify-center text-center space-y-3 border border-outline-variant/30">
              <h4 className="font-headline-md text-headline-md text-primary">99.9%</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Uptime guarantee for all global payment operations.
              </p>
              <div className="pt-4">
                <Link
                  href="/developers"
                  className="text-primary font-semibold flex items-center justify-center gap-1 hover:gap-2 transition-all"
                >
                  View API Status
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-gutter max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">Frequently Asked Questions</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Get quick answers to the most common questions about NorveXPay.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden level-1-shadow"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-on-surface text-body-md">{q}</span>
                <span
                  className="material-symbols-outlined transition-transform shrink-0 ml-4"
                  style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-on-surface-variant text-body-sm leading-relaxed">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
