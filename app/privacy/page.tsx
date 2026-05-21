'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/* ─── Section content components ─────────────────────────── */

const PolicyContent = () => (
  <div className="space-y-10">
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex gap-3">
      <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
      <p className="text-body-sm text-on-surface-variant leading-relaxed">
        Norvex Pay Ltd is the data controller for personal data processed in connection with our Services. We are registered with the UK Information Commissioner&apos;s Office (ICO) and appoint a dedicated Data Protection Officer. Contact: <a href="mailto:dpo@norvexpay.com" className="text-primary font-semibold">dpo@norvexpay.com</a>
      </p>
    </div>

    {[
      {
        title: '1. Data We Collect',
        body: `Identity & Contact Data — Full name, date of birth, email, phone, and postal address. For merchants: company name, registration number, and business address.

Financial Data — Tokenised payment card details (we never store raw card numbers), bank account details for settlement, and transaction history.

Technical Data — IP address, browser type, device identifiers, and usage logs including pages visited and session duration.

Compliance & Verification Data — Government-issued identity documents, proof of address, and beneficial ownership information (required for KYC/AML).

Communications Data — Support tickets, emails, chat transcripts, and survey responses.

We collect data directly from you, automatically through your use of our platform, and occasionally from credit reference agencies and identity verification providers.`,
      },
      {
        title: '2. How We Use Your Data',
        body: `Contract — Processing and settling payments; managing your merchant account; sending transaction confirmations.

Legal Obligation — Conducting KYC/AML checks; reporting to financial regulators; retaining records as required by law.

Legitimate Interest — Monitoring for fraud and suspicious activity; improving platform performance using anonymised analytics; protecting our platform from abuse.

Consent — Sending newsletters and marketing communications where you have explicitly opted in. You may withdraw consent at any time via the unsubscribe link in any marketing email.

We will never sell your personal data to third parties for their own marketing purposes.`,
      },
      {
        title: '3. Sharing Your Data',
        body: `Service Providers — Carefully vetted processors acting on our instructions: payment network partners, identity verification providers, cloud infrastructure, customer support platforms, and anonymised analytics tools.

Regulatory & Legal — Financial regulators (FCA, HMRC), law enforcement, or courts when legally required or to protect our legal rights.

Business Transfers — In the event of a merger or acquisition, your data may transfer to the acquiring entity under equivalent protections.

International Transfers — Where data leaves the UK or EEA, we use Standard Contractual Clauses (SCCs) approved by the ICO to maintain your data protection rights.`,
      },
      {
        title: '4. Your Rights Under UK GDPR',
        body: `Access — Request a copy of all personal data we hold about you.

Rectification — Ask us to correct inaccurate or incomplete data.

Erasure — Request deletion where we no longer have a lawful basis to retain it (subject to legal obligations).

Restriction — Ask us to pause processing in certain circumstances.

Portability — Receive your data in a machine-readable format and transfer it to another provider.

Object — Object to processing based on legitimate interests or direct marketing.

Human Review — Where automated decisions significantly affect you, request human review.

To exercise any right, email dpo@norvexpay.com. We respond within 30 days. You also have the right to complain to the ICO at ico.org.uk.`,
      },
      {
        title: '5. Data Retention',
        body: `Transaction records — 7 years (HMRC and financial regulations)
KYC/identity documents — 5 years after the business relationship ends (MLR 2017)
Fraud investigation records — Up to 10 years where criminal proceedings are involved
Marketing preferences — Until you withdraw consent or request deletion

After expiry, data is securely deleted or irreversibly anonymised. Anonymised, aggregated data may be retained indefinitely for statistical purposes.`,
      },
      {
        title: '6. Security',
        body: `We implement: end-to-end TLS 1.3 encryption for data in transit; AES-256 encryption for data at rest; PCI DSS Level 1 certification for payment data; regular third-party penetration testing; strict role-based access controls; 24/7 security monitoring; and mandatory breach notification to the ICO within 72 hours.

If you suspect a security incident involving your data, contact security@norvexpay.com immediately.`,
      },
    ].map(({ title, body }) => (
      <div key={title}>
        <h3 className="font-semibold text-on-surface text-lg mb-3 pb-2 border-b border-outline-variant/20">{title}</h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">{body}</p>
      </div>
    ))}
  </div>
)

const CookiesContent = () => {
  const types = [
    {
      id: 'essential',
      icon: 'lock',
      label: 'Essential',
      always: true,
      color: 'text-tertiary',
      bg: 'bg-tertiary/10',
      border: 'border-tertiary/20',
      badge: 'bg-tertiary/10 text-tertiary',
      desc: 'Strictly necessary for the website and payment platform to function. Cannot be disabled.',
      cookies: [
        { name: 'session_id', purpose: 'Maintains your authenticated session', duration: 'Session' },
        { name: 'csrf_token', purpose: 'Prevents Cross-Site Request Forgery attacks', duration: 'Session' },
        { name: '__cf_bm', purpose: 'Cloudflare bot mitigation', duration: '30 min' },
        { name: 'merchant_pref', purpose: 'Stores dashboard layout preferences', duration: '1 year' },
      ],
    },
    {
      id: 'analytics',
      icon: 'analytics',
      label: 'Analytics',
      always: false,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      badge: 'bg-primary/10 text-primary',
      desc: 'Help us understand how visitors use the platform so we can improve it. All data is anonymised.',
      cookies: [
        { name: '_ga', purpose: 'Google Analytics — unique user distinction', duration: '2 years' },
        { name: '_ga_XXXXXX', purpose: 'GA4 — session and engagement tracking', duration: '2 years' },
        { name: 'np_session', purpose: 'Internal funnel tracking (anonymised)', duration: '90 days' },
      ],
    },
    {
      id: 'functional',
      icon: 'tune',
      label: 'Functional',
      always: false,
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      border: 'border-secondary/20',
      badge: 'bg-secondary/10 text-secondary',
      desc: 'Enable enhanced features such as live chat and personalised content.',
      cookies: [
        { name: 'intercom-session', purpose: 'Live chat session state', duration: 'Session' },
        { name: 'lang_pref', purpose: 'Preferred language and locale', duration: '1 year' },
      ],
    },
    {
      id: 'marketing',
      icon: 'campaign',
      label: 'Marketing',
      always: false,
      color: 'text-error',
      bg: 'bg-error/10',
      border: 'border-error/20',
      badge: 'bg-error/10 text-error',
      desc: 'Track activity across sites for relevant ads and campaign measurement. Only with your explicit consent.',
      cookies: [
        { name: '_fbp', purpose: 'Facebook Pixel — conversion tracking', duration: '90 days' },
        { name: '_gcl_au', purpose: 'Google Ads — conversion measurement', duration: '90 days' },
        { name: 'li_sugr', purpose: 'LinkedIn Insight Tag', duration: '90 days' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
          <h4 className="font-semibold text-on-surface mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">help</span>
            What are cookies?
          </h4>
          <p className="text-body-sm text-on-surface-variant leading-relaxed">
            Cookies are small text files placed on your device. They help websites work efficiently, remember your preferences, and provide analytics. Session cookies expire when you close your browser; persistent cookies remain until they expire or are deleted.
          </p>
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
          <h4 className="font-semibold text-on-surface mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">manage_accounts</span>
            Managing preferences
          </h4>
          <p className="text-body-sm text-on-surface-variant leading-relaxed">
            Use our cookie preference centre (accessible via the banner on our site) to opt in or out of non-essential cookies at any time. You can also configure your browser to refuse all or some cookies — note that this may affect platform functionality.
          </p>
        </div>
      </div>

      {types.map((type) => (
        <div key={type.id} className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden">
          <div className={`flex items-center justify-between gap-4 px-6 py-4 border-b border-outline-variant/20`}>
            <div className="flex items-center gap-3">
              <span className={`w-9 h-9 flex items-center justify-center rounded-xl border ${type.bg} ${type.border} ${type.color}`}>
                <span className="material-symbols-outlined text-[18px]">{type.icon}</span>
              </span>
              <div>
                <span className="font-semibold text-on-surface">{type.label} Cookies</span>
                <p className="text-xs text-on-surface-variant mt-0.5">{type.desc}</p>
              </div>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${type.badge}`}>
              {type.always ? 'Always Active' : 'Optional'}
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="bg-surface-container-low/60">
                  <th className="text-left px-6 py-2 text-xs font-semibold text-on-surface-variant uppercase tracking-wider w-1/4">Name</th>
                  <th className="text-left px-6 py-2 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Purpose</th>
                  <th className="text-left px-6 py-2 text-xs font-semibold text-on-surface-variant uppercase tracking-wider w-24">Duration</th>
                </tr>
              </thead>
              <tbody>
                {type.cookies.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 1 ? 'bg-surface-container-low/30' : ''}>
                    <td className="px-6 py-3 font-mono text-primary text-xs">{c.name}</td>
                    <td className="px-6 py-3 text-on-surface-variant">{c.purpose}</td>
                    <td className="px-6 py-3 text-on-surface-variant whitespace-nowrap">{c.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
        <p className="text-body-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Third-Party Cookies:</strong> Some cookies are set by third-party services (Google, Meta, Intercom) and are subject to their privacy policies. NorveXPay does not control their data practices. NorveXPay does not currently respond to browser Do Not Track (DNT) signals pending an agreed industry standard.
        </p>
      </div>
    </div>
  )
}

const ComplianceContent = () => (
  <div className="space-y-10">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {[
        { icon: 'credit_card', label: 'PCI DSS Level 1', tag: 'Annual QSA Audit' },
        { icon: 'shield', label: 'Data Protection', tag: 'ICO Registered' },
        { icon: 'verified', label: 'ISO/IEC 27001', tag: 'Certified' },
        { icon: 'policy', label: 'AML / CFT', tag: 'MLR 2017' },
      ].map(({ icon, label, tag }) => (
        <div key={label} className="bg-surface rounded-xl border border-outline-variant/30 p-4 hover:border-primary/40 transition-colors">
          <span className="material-symbols-outlined text-primary mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
          <p className="font-semibold text-on-surface text-sm mb-1">{label}</p>
          <p className="text-xs text-tertiary font-semibold">{tag}</p>
        </div>
      ))}
    </div>

    <div>
      <h3 className="font-semibold text-on-surface text-lg mb-5 pb-2 border-b border-outline-variant/20">AML & KYC Programme</h3>
      <div className="space-y-4">
        {[
          { step: '01', title: 'Customer Due Diligence (CDD)', desc: 'Every merchant undergoes identity verification against government-issued documents and sanctions screening before activation. UBOs are verified for all business accounts.' },
          { step: '02', title: 'Enhanced Due Diligence (EDD)', desc: 'High-risk merchants, PEPs, and accounts in high-risk jurisdictions face enhanced scrutiny including source-of-funds verification and senior management sign-off.' },
          { step: '03', title: 'Ongoing Transaction Monitoring', desc: 'Real-time monitoring applies rules-based and ML models to flag suspicious patterns and behaviour inconsistent with declared business activity.' },
          { step: '04', title: 'Suspicious Activity Reporting', desc: 'We file SARs with the National Crime Agency (NCA) as required. Our designated MLRO and Deputy MLRO oversee this responsibility.' },
          { step: '05', title: 'Sanctions Screening', desc: 'All merchants, customers, and transactions are screened against OFAC, UN, EU, and HM Treasury sanctions lists in real-time via daily-updated automated tools.' },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4 p-5 bg-surface rounded-xl border border-outline-variant/30">
            <span className="text-2xl font-bold text-primary/25 font-headline-md shrink-0 w-8 mt-0.5">{step}</span>
            <div>
              <p className="font-semibold text-on-surface mb-1">{title}</p>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-semibold text-on-surface text-lg mb-5 pb-2 border-b border-outline-variant/20">Data Residency & Jurisdictions</h3>
      <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
        <table className="w-full text-body-sm bg-surface">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant/20">
              <th className="text-left px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Region</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Authority</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Law</th>
            </tr>
          </thead>
          <tbody>
            {[
              { r: 'United Kingdom', a: 'ICO', l: 'UK GDPR / DPA 2018' },
              { r: 'European Union', a: 'DPC (Ireland)', l: 'EU GDPR 2016/679' },
              { r: 'United States', a: 'State-level (CCPA)', l: 'CCPA / State Laws' },
              { r: 'Canada', a: 'OPC', l: 'PIPEDA' },
            ].map(({ r, a, l }, i) => (
              <tr key={r} className={i % 2 === 1 ? 'bg-surface-container-low/30' : ''}>
                <td className="px-5 py-3 font-semibold text-on-surface">{r}</td>
                <td className="px-5 py-3 text-on-surface-variant">{a}</td>
                <td className="px-5 py-3 text-on-surface-variant">{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
        <h4 className="font-semibold text-on-surface mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">bug_report</span>
          Responsible Disclosure
        </h4>
        <p className="text-body-sm text-on-surface-variant leading-relaxed mb-3">
          Discover a vulnerability? Report it responsibly to our security team. We acknowledge within 24 hours and commit to not pursuing legal action against good-faith researchers.
        </p>
        <a href="mailto:security@norvexpay.com" className="text-primary text-sm font-semibold hover:underline">security@norvexpay.com</a>
      </div>
      <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
        <h4 className="font-semibold text-on-surface mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">contact_mail</span>
          Compliance Contacts
        </h4>
        <div className="space-y-2">
          {[
            { role: 'DPO', email: 'dpo@norvexpay.com' },
            { role: 'MLRO', email: 'mlro@norvexpay.com' },
            { role: 'Compliance', email: 'compliance@norvexpay.com' },
          ].map(({ role, email }) => (
            <div key={role} className="flex justify-between items-center text-xs">
              <span className="font-semibold text-on-surface">{role}</span>
              <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

/* ─── Section definitions ─────────────────────────────────── */

type Section = {
  id: string
  label: string
  shortLabel: string
  icon: string
  meta: string
  intro: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: 'policy',
    label: 'Privacy Policy',
    shortLabel: 'Privacy',
    icon: 'lock',
    meta: 'Effective 20 May 2026',
    intro: 'How NorveXPay collects, uses, shares, and protects your personal data, and how to exercise your rights as a data subject.',
    content: <PolicyContent />,
  },
  {
    id: 'cookies',
    label: 'Cookie Policy',
    shortLabel: 'Cookies',
    icon: 'cookie',
    meta: 'Effective 20 May 2026',
    intro: 'A full breakdown of the cookies and tracking technologies used on the NorveXPay platform, organised by category.',
    content: <CookiesContent />,
  },
  {
    id: 'compliance',
    label: 'Compliance',
    shortLabel: 'Compliance',
    icon: 'verified_user',
    meta: 'Updated 20 May 2026',
    intro: "NorveXPay's regulatory certifications, AML/KYC programme, data residency framework, and compliance contacts.",
    content: <ComplianceContent />,
  },
]

/* ─── Page component ──────────────────────────────────────── */

export default function PrivacyPage() {
  const [active, setActive] = useState('policy')
  const [contentKey, setContentKey] = useState(0)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && sections.some((s) => s.id === hash)) setActive(hash)
  }, [])

  const current = sections.find((s) => s.id === active)!

  const handleSelect = (id: string) => {
    if (id === active) return
    setActive(id)
    setContentKey((k) => k + 1)
    window.history.replaceState(null, '', `/privacy#${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page header */}
      <section className="pt-16 pb-12 px-gutter max-w-container-max mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
          <span className="material-symbols-outlined text-[16px]">privacy_tip</span>
          <span className="font-label-caps text-label-caps">PRIVACY CENTRE</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg-mobile lg:font-headline-lg text-on-surface leading-tight mb-4">
          Privacy &amp; <span className="text-primary">Data</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          How we handle your data, what cookies we use, and the regulatory standards we uphold. Select a document from the contents panel on the left.
        </p>
      </section>

      {/* Compliance badges */}
      <section className="pb-10 px-gutter max-w-container-max mx-auto">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: 'shield', label: 'PCI DSS Level 1' },
            { icon: 'policy', label: 'ICO Registered' },
            { icon: 'encrypted', label: 'AES-256 Encrypted' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Two-panel layout */}
      <section className="pb-24 px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
            <nav className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden level-1-shadow">

              <div className="px-5 pt-5 pb-4 border-b border-outline-variant/20">
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs">Contents</p>
              </div>

              <ul className="p-2">
                {sections.map((s) => {
                  const isActive = s.id === active
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => handleSelect(s.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all group ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[20px] shrink-0 transition-colors ${
                            isActive ? 'text-primary' : 'text-outline group-hover:text-on-surface'
                          }`}
                          style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          {s.icon}
                        </span>
                        <span className={`text-body-sm font-medium leading-snug ${isActive ? 'font-semibold' : ''}`}>
                          {s.label}
                        </span>
                        {isActive && (
                          <span className="material-symbols-outlined text-[16px] ml-auto text-primary shrink-0">chevron_right</span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>

              <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/60">
                <p className="text-xs text-on-surface-variant mb-2 font-semibold">Data Protection Officer</p>
                <a href="mailto:dpo@norvexpay.com" className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">mail</span>
                  dpo@norvexpay.com
                </a>
              </div>

              <div className="px-4 pb-4">
                <Link
                  href="/legal"
                  className="flex items-center gap-2 mt-2 text-xs text-on-surface-variant hover:text-primary transition-colors font-medium"
                >
                  <span className="material-symbols-outlined text-[14px]">gavel</span>
                  Switch to Legal Docs
                  <span className="material-symbols-outlined text-[14px] ml-auto">arrow_forward</span>
                </Link>
              </div>

            </nav>
          </aside>

          {/* ── Content panel ── */}
          <div className="flex-1 min-w-0">
            <div
              key={contentKey}
              style={{ animation: 'slide-up-fade 0.3s ease both' }}
              className="bg-surface rounded-2xl border border-outline-variant/30 level-1-shadow overflow-hidden"
            >
              {/* Document header */}
              <div className="px-8 py-7 border-b border-outline-variant/20 bg-surface-container-low/40">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center accent_gradient rounded-xl text-white shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{current.icon}</span>
                    </div>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">{current.label}</h2>
                      <p className="text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">schedule</span>
                        {current.meta}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                    Norvex Pay Ltd
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant mt-4 leading-relaxed">{current.intro}</p>
              </div>

              {/* Document body */}
              <div className="p-8">
                {current.content}
              </div>

              {/* Document footer nav */}
              <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low/40 flex flex-col sm:flex-row gap-3 justify-between items-center">
                <p className="text-xs text-on-surface-variant">
                  Registered in England &amp; Wales · Company No. 15482930 · ICO Registration No. ZB123456
                </p>
                <div className="flex gap-3 shrink-0">
                  {sections.filter((s) => s.id !== active).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelect(s.id)}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[13px]">{s.icon}</span>
                      {s.shortLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
