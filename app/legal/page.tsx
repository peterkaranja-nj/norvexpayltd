'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

const TermsContent = () => (
  <div className="space-y-10">
    {[
      {
        title: '1. Acceptance of Terms',
        body: `By accessing or using the NorveXPay platform, APIs, or any associated services ("Services"), you confirm that you have read, understood, and agree to be bound by these Terms. If you are acting on behalf of a company, you represent that you have the authority to bind that entity. If you do not agree, you must immediately cease using our Services.

NorveXPay reserves the right to update these Terms at any time. Material changes will be communicated by email or dashboard notice. Continued use of the Services following any modification constitutes acceptance of the updated Terms.`,
      },
      {
        title: '2. Description of Services',
        body: `NorveXPay provides a payment gateway and financial technology services enabling merchants to accept, process, and manage online payments worldwide. Services include:

• Payment processing (cards, digital wallets, bank transfers, local methods)
• Real-time fraud detection and risk monitoring
• Transaction analytics and merchant dashboards
• Developer APIs, SDKs, and integration libraries
• Recurring billing and subscription management
• Multi-currency settlement

NorveXPay is not a bank. We partner with authorised payment institutions and banking partners to facilitate fund flows.`,
      },
      {
        title: '3. Account Registration & Eligibility',
        body: `To use our Services you must be at least 18 years old, a lawfully registered business or sole trader, not subject to applicable trade sanctions, and successfully complete our KYC/AML verification. You are responsible for the confidentiality of your account credentials and must notify security@norvexpay.com immediately on suspicion of unauthorised access.

NorveXPay may refuse, suspend, or terminate any account at our discretion where we reasonably believe it is being used for prohibited activities.`,
      },
      {
        title: '4. Your Obligations',
        body: `As a NorveXPay merchant you agree to: comply with all applicable laws; not use the Services for prohibited activities (see Section 5); maintain accurate transaction records; display clear refund policies to customers; maintain PCI DSS compliance relevant to your integration; and cooperate with compliance, audit, and fraud investigation requests.

You are solely responsible for the goods or services you sell, the accuracy of your transaction data, and resolution of customer disputes.`,
      },
      {
        title: '5. Prohibited Activities',
        body: `You may not use NorveXPay in connection with: illegal goods or services; unlicensed gambling; adult content; weapons; pyramid or multi-level marketing schemes; high-risk unregulated financial instruments; counterfeit goods or IP infringement; phishing or malware; money laundering or sanctions violations; or processing on behalf of undisclosed third parties.

Engaging in prohibited activities may result in immediate account suspension, fund withholding, and referral to law enforcement.`,
      },
      {
        title: '6. Fees & Payment Terms',
        body: `All fees are set out in your Merchant Agreement or displayed in your dashboard, and may include per-transaction fees, monthly platform fees, chargeback handling fees, and currency conversion fees. All fees exclude applicable VAT unless otherwise stated.

Fees are deducted directly from your settlement funds. Disputed charges must be raised within 30 days of the relevant invoice date.`,
      },
      {
        title: '7. Intellectual Property',
        body: `All content, software, and intellectual property comprising the NorveXPay platform ("NorveXPay IP") are owned by or licensed to Norvex Pay Ltd. We grant you a limited, non-exclusive, revocable licence to use our Services for your legitimate business purposes.

You may not copy, reverse-engineer, or create derivative works from NorveXPay IP, nor use our name or trademarks without prior written consent.`,
      },
      {
        title: '8. Limitation of Liability',
        body: `To the maximum extent permitted by law, NorveXPay shall not be liable for indirect, incidental, or consequential damages, including loss of profits, revenue, or data. Our total cumulative liability shall not exceed the greater of: (a) total fees paid by you in the preceding three months, or (b) £100 GBP.`,
      },
      {
        title: '9. Termination',
        body: `Either party may terminate this agreement on 30 days' written notice. NorveXPay may terminate immediately without notice for breach of these Terms, regulatory requirement, suspected fraud, or insolvency.

On termination, your right to use the Services ceases immediately. Provisions relating to IP, liability, and accrued payments survive termination.`,
      },
      {
        title: '10. Governing Law',
        body: `These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales. Both parties agree to first attempt informal resolution by contacting legal@norvexpay.com before initiating formal proceedings.`,
      },
    ].map(({ title, body }) => (
      <div key={title}>
        <h3 className="font-semibold text-on-surface text-lg mb-3 pb-2 border-b border-outline-variant/20">{title}</h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">{body}</p>
      </div>
    ))}
  </div>
)

const CharterContent = () => (
  <div className="space-y-8">
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
      <p className="text-body-md text-on-surface-variant leading-relaxed">
        The NorveXPay Client Protection Charter sets out the specific commitments we make to every merchant and developer who uses our platform. These are binding obligations — not aspirations.
      </p>
    </div>

    {[
      {
        icon: 'verified_user',
        title: 'Transaction Security Guarantee',
        body: 'All transactions processed through NorveXPay are protected by end-to-end TLS 1.3 encryption and PCI DSS Level 1 certified infrastructure. In the event of an unauthorised transaction resulting from a breach of our systems, we will reimburse the full transaction value within 3 business days, subject to investigation. You will never bear losses caused by our platform failure.',
      },
      {
        icon: 'gavel',
        title: 'Dispute Resolution Commitment',
        body: 'We commit to acknowledging every formal dispute within 24 hours of submission. All chargeback disputes will receive a substantive response within 5 business days. Escalated complaints not resolved within 15 business days are automatically reviewed by our Senior Compliance Officer. Where we rule in your favour, any withheld funds are released within 2 business days.',
      },
      {
        icon: 'lock',
        title: 'Data Protection Pledge',
        body: 'Your business data and your customers\' personal data will never be sold to third parties for commercial purposes. Data is retained only for the minimum period required by applicable regulation. You have the right to request a full data export of your account data at any time. We will notify you within 48 hours of becoming aware of any data breach that affects your account.',
      },
      {
        icon: 'speed',
        title: 'Service Level Agreement (SLA)',
        body: 'NorveXPay guarantees 99.9% platform uptime per calendar month, excluding scheduled maintenance communicated at least 48 hours in advance. In months where uptime falls below 99.9%, affected merchants receive a credit equal to 10× the value of the downtime as a percentage of their monthly processing fee. Scheduled maintenance windows are always between 02:00–04:00 UTC.',
      },
      {
        icon: 'balance',
        title: 'Fair Treatment Policy',
        body: 'We commit to treating all merchants equitably, without discrimination based on business size, geography, or volume. Risk-based decisions (account reviews, reserve requirements) are made on objective criteria and you will always receive written notification of the reason. You have the right to request a senior review of any adverse decision within 10 business days.',
      },
      {
        icon: 'contact_support',
        title: 'Raising a Complaint',
        body: 'To raise a formal complaint, email complaints@norvexpay.com with your account ID, a description of the issue, and any supporting documentation. We acknowledge all complaints within 24 hours and provide a final response within 15 business days. If you remain dissatisfied, you may escalate to the Financial Ombudsman Service (FOS) at financial-ombudsman.org.uk.',
      },
    ].map(({ icon, title, body }) => (
      <div key={title} className="flex gap-5 p-6 bg-surface rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors">
        <div className="w-11 h-11 flex items-center justify-center accent_gradient rounded-xl text-white shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[22px]">{icon}</span>
        </div>
        <div>
          <h3 className="font-semibold text-on-surface mb-2">{title}</h3>
          <p className="text-body-sm text-on-surface-variant leading-relaxed">{body}</p>
        </div>
      </div>
    ))}
  </div>
)

const AgreementContent = () => (
  <div className="space-y-10">
    {[
      {
        title: '1. Merchant Eligibility & Onboarding',
        body: `To be approved as a NorveXPay merchant you must successfully complete our onboarding process, which includes: submission of a valid government-issued ID for all directors and ultimate beneficial owners (UBOs); proof of business registration; a valid business bank account in a supported currency; and a description of your business model and anticipated transaction volumes.

Approval is subject to our risk assessment and compliance review. We reserve the right to request additional documentation at any stage. Providing false information during onboarding constitutes a material breach of this Agreement.`,
      },
      {
        title: '2. Transaction Processing',
        body: `Once approved, you may process transactions up to the limits specified in your account dashboard. NorveXPay uses intelligent routing to maximise approval rates. You authorise NorveXPay to: capture and settle funds on your behalf; apply risk holds where unusual activity is detected; and deduct applicable fees and chargebacks from your payable balance.

All transaction data is retained for a minimum of 7 years in accordance with financial regulations.`,
      },
      {
        title: '3. Fees & Settlement Schedule',
        body: `Processing fees are detailed in your Merchant Rate Card. Standard settlement is T+2 (two business days after transaction date). Faster settlement options are available on Enterprise plans. Settlement is to your registered bank account in the agreed settlement currency.

NorveXPay reserves the right to withhold settlement where: a chargeback dispute is pending; suspicious activity is under investigation; or your account has been placed on review. You will be notified in writing of any settlement delay.`,
      },
      {
        title: '4. Chargebacks & Disputes',
        body: `A chargeback occurs when a cardholder disputes a transaction with their issuing bank. For each chargeback, you will be debited the original transaction amount plus a chargeback administration fee (as per your Rate Card).

To contest a chargeback, submit evidence through your dashboard within 7 calendar days of notification. NorveXPay will submit your evidence to the card network. Merchants with a chargeback ratio exceeding 1% of monthly transactions for two consecutive months may be placed on a remediation plan or face account suspension.`,
      },
      {
        title: '5. Prohibited Merchant Categories',
        body: `The following business types may not use NorveXPay's Services without specific written authorisation: adult content; online gambling; nutraceuticals with unsubstantiated medical claims; cryptocurrency exchanges; multi-level marketing; debt collection; penny auctions; pseudo-pharmaceuticals; and businesses operating in FATF high-risk jurisdictions.

Processing transactions for a prohibited category without authorisation is a material breach leading to immediate termination and potential regulatory referral.`,
      },
      {
        title: '6. Risk Monitoring & Account Reviews',
        body: `NorveXPay continuously monitors transaction patterns for fraud, money laundering, and policy violations. We may initiate an account review at any time. During a review, processing limits may be reduced and settlement may be paused. You will be notified of a review initiation and invited to provide information.

Reviews are typically completed within 10 business days. If no concerns are identified, your account returns to normal operation and any withheld settlements are released immediately.`,
      },
      {
        title: '7. Reserve Fund Policy',
        body: `NorveXPay may require a rolling or fixed reserve to mitigate chargeback risk. Reserve amounts, timing, and release conditions will be specified in writing. Rolling reserves are typically set at 5–10% of gross monthly volume, held for 180 days. Fixed reserves are determined by individual risk assessment.

Reserve funds are not interest-bearing. On account closure, reserve funds are released after the applicable hold period, net of any outstanding chargebacks or fees.`,
      },
      {
        title: '8. Termination & Off-boarding',
        body: `Either party may terminate this Agreement with 30 days' written notice. NorveXPay may terminate immediately for material breach, prohibited activity, insolvency, or regulatory requirement.

On termination, pending settlements will be processed on the standard schedule minus any outstanding chargebacks, fees, and reserve requirements. Reserve funds are released after the applicable hold period. Data portability requests must be submitted within 60 days of termination.`,
      },
    ].map(({ title, body }) => (
      <div key={title}>
        <h3 className="font-semibold text-on-surface text-lg mb-3 pb-2 border-b border-outline-variant/20">{title}</h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">{body}</p>
      </div>
    ))}
  </div>
)

const sections: Section[] = [
  {
    id: 'terms',
    label: 'Terms of Service',
    shortLabel: 'Terms',
    icon: 'gavel',
    meta: 'Effective 20 May 2026',
    intro: 'The legal agreement governing your use of the NorveXPay platform and all associated services.',
    content: <TermsContent />,
  },
  {
    id: 'charter',
    label: 'Client Protection Charter',
    shortLabel: 'Client Protection',
    icon: 'shield',
    meta: 'Effective 20 May 2026',
    intro: 'Six binding commitments NorveXPay makes to every merchant and developer on our platform.',
    content: <CharterContent />,
  },
  {
    id: 'agreement',
    label: 'Merchant Operating Agreement',
    shortLabel: 'Merchant Agreement',
    icon: 'handshake',
    meta: 'Effective 20 May 2026',
    intro: 'Detailed terms covering merchant onboarding, fees, settlement, chargebacks, and account management.',
    content: <AgreementContent />,
  },
]

/* ─── Page component ──────────────────────────────────────── */

export default function LegalPage() {
  const [active, setActive] = useState('terms')
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
    window.history.replaceState(null, '', `/legal#${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page header */}
      <section className="pt-16 pb-12 px-gutter max-w-container-max mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
          <span className="material-symbols-outlined text-[16px]">folder_open</span>
          <span className="font-label-caps text-label-caps">LEGAL DOCUMENTS</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg-mobile lg:font-headline-lg text-on-surface leading-tight mb-4">
          Legal <span className="text-primary">Centre</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          All of NorveXPay&apos;s legal documents in one place. Select a document from the contents panel to read it, or jump directly from the footer links.
        </p>
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
                <p className="text-xs text-on-surface-variant mb-2 font-semibold">Legal enquiries</p>
                <a href="mailto:legal@norvexpay.com" className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">mail</span>
                  legal@norvexpay.com
                </a>
              </div>

              <div className="px-4 pb-4">
                <Link
                  href="/privacy"
                  className="flex items-center gap-2 mt-2 text-xs text-on-surface-variant hover:text-primary transition-colors font-medium"
                >
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Switch to Privacy Docs
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
                  Registered in England &amp; Wales · Company No. 15482930 · Governed by the laws of England and Wales
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
