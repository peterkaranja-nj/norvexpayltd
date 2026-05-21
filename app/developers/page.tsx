import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Developer Portal - Built for Developers, Powered by Simplicity',
  description: 'Integrate enterprise-grade payment processing into your application in minutes. Simple APIs, robust SDKs, and comprehensive documentation.',
}

export default function DevelopersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-10 pb-16 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="font-headline-lg text-headline-lg-mobile lg:font-display-xl lg:text-display-xl tracking-tight text-on-background">
              Built for Developers, <br />
              <span className="text-primary">Powered by Simplicity.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-lg">
              Integrate enterprise-grade payment processing into your application in minutes. Simple APIs, robust SDKs, and comprehensive documentation to help you build faster.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="accent-gradient text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                Get API Keys
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="bg-surface-container-high text-primary px-8 py-3 rounded-xl font-semibold border border-outline-variant hover:border-primary transition-all"
              >
                Explore Docs
              </Link>
            </div>
          </div>

          {/* Code snippet */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl level-1-shadow transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[#1e293b] px-4 py-3 border-b border-[#334155] flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[#94a3b8] text-body-sm font-code-snippet">POST /v1/payments</span>
              </div>
              <div className="bg-[#0f172a] p-6 font-code-snippet text-code-snippet overflow-x-auto">
                <pre className="text-[#f8fafc]">
                  <code>
                    <span className="text-[#79c0ff]">curl</span>
                    {' -X POST https://api.norvexpay.com/v1/payments \\\n'}
                    {'  -H '}
                    <span className="text-[#cbd5e1]">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span>
                    {' \\\n'}
                    {'  -H '}
                    <span className="text-[#cbd5e1]">&quot;Content-Type: application/json&quot;</span>
                    {' \\\n'}
                    {"  -d '{\n"}
                    {'    '}
                    <span className="text-tertiary-fixed-dim">&quot;amount&quot;</span>
                    {': 24500,\n    '}
                    <span className="text-tertiary-fixed-dim">&quot;currency&quot;</span>
                    {': '}
                    <span className="text-[#cbd5e1]">&quot;USD&quot;</span>
                    {',\n    '}
                    <span className="text-tertiary-fixed-dim">&quot;source&quot;</span>
                    {': '}
                    <span className="text-[#cbd5e1]">&quot;tok_visa&quot;</span>
                    {',\n    '}
                    <span className="text-tertiary-fixed-dim">&quot;description&quot;</span>
                    {': '}
                    <span className="text-[#cbd5e1]">&quot;Payment for Invoice #1024&quot;</span>
                    {"\n  }'"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed/20 -z-10 blur-3xl opacity-50" />
      </section>

      {/* ── Technical Features ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4" data-animate>
              Powering Technical Innovation
            </h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto" data-animate data-delay="100">
              Scalable infrastructure designed to handle peak volumes without breaking a sweat. Focus on your product while we handle the money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'integration_instructions',
                title: 'Easy Integration',
                desc: 'Connect your existing ecosystem in minutes with our plug-and-play SDKs for Web, iOS, and Android.',
              },
              {
                icon: 'api',
                title: 'Modern APIs & SDKs',
                desc: 'RESTful APIs built with developers in mind. Clean structures, clear errors, and detailed versioning history.',
              },
              {
                icon: 'webhook',
                title: 'Reliable Webhooks',
                desc: 'Get real-time updates for every transaction state. Retry logic and event logging included out of the box.',
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(204,136,0,0.12)] transition-all duration-300 group"
                data-animate
                data-delay={String(i * 100)}
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">{icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
                <p className="text-on-surface-variant font-body-md">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-Step Process ── */}
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
                { step: '1', title: 'Sign Up', desc: 'Create your developer account and get instant access to the sandbox environment.', active: true, icon: 'how_to_reg' },
                { step: '2', title: 'Integrate', desc: 'Use our SDKs or direct API calls to connect your platform. Test with our virtual cards.', active: true, icon: 'integration_instructions' },
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

      {/* ── Bento Grid: Developer Ecosystem ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6">
            {/* Dashboard — large */}
            <div className="md:col-span-8 md:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="flex flex-col h-full relative z-10">
                <h3 className="font-headline-md text-headline-md mb-2">Powerful Developer Dashboard</h3>
                <p className="text-secondary font-body-md mb-8 max-w-md">
                  Monitor API traffic, debug issues with real-time request logs, and manage your team&apos;s access levels.
                </p>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSj1sP8fxzH189VjmWb6xuTi0iwC34fnEh51qyeNC5ZZqW6io8Qe8fXsHOv_6a_mlaSqFG7K5Avz7ZPX90Xd5o3m4ffFVusOfyllIZ9NiUg1BGHq2HVG9WX_71HMTLEAX9_c3CCcrc81VQdE6ZAg0wdzCp80dKwEoVn4IdKoL2GcPOKN8zyS3asJOmFGsYZl8szBceVnQgOJfZQHeqCAb2U17OBeZ5Pu5OAA2BUBzkQpzhLxqGKYDk106l09MoeVXCF2ka6zAl3Sw"
                  alt="Dashboard Preview"
                  width={700}
                  height={400}
                  className="mt-auto rounded-xl shadow-lg border border-outline-variant/30 group-hover:scale-[1.02] transition-transform duration-500 w-full"
                />
              </div>
            </div>

            {/* Bank-Grade Security */}
            <div className="md:col-span-4 accent_gradient text-on-primary rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span
                  className="material-symbols-outlined text-[40px] mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">Bank-Grade Security</h3>
                <p className="text-primary-fixed font-body-sm">
                  PCI DSS Level 1 compliant infrastructure. We handle the compliance so you don&apos;t have to.
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <span className="material-symbols-outlined text-[160px]">lock</span>
              </div>
            </div>

            {/* Rich Documentation */}
            <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-2xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[40px] mb-4 block">library_books</span>
                <h3 className="font-headline-md text-headline-md mb-2">Rich Documentation</h3>
                <p className="text-tertiary-fixed font-body-sm">
                  Guides for every language and use case. From subscriptions to one-off charges.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 flex items-center gap-1 font-semibold hover:underline"
              >
                Read the Docs
                <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="accent-gradient rounded-3xl p-12 lg:p-20 text-center text-on-primary relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg mb-6">Ready to build something great?</h2>
              <p className="font-body-lg text-body-lg opacity-90 mb-12">
                Join 10,000+ developers building the future of commerce on NorveXPay. Get started with your free test account today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-surface-container-lowest text-primary px-10 py-4 rounded-xl font-bold text-body-lg hover:shadow-lg transition-shadow"
                >
                  Create Test Account
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-on-primary/30 text-on-primary px-10 py-4 rounded-xl font-bold text-body-lg hover:bg-white/10 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  )
}
