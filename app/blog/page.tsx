import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import BlogFilters from '@/components/BlogFilters'

export const metadata: Metadata = {
  title: 'Blog - Insights into Fintech Future',
  description: 'Explore the latest news, expert guides, and technical insights on the future of global payments, security, and fintech growth.',
}

const blogPosts = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP8htD5fhf9nKvYRFFNgxIOr0p5dYnx3nSLE1TPOG6KKvaSH3cxLTtRugbUo597gRvxCQkiXsZen6SLZGj2ev4tCw-hkbm86Q12u_pRBPMaueAfuEyFsnqOLXUSqJ_SMZ8P5MrVm1NgPsCslYzgoUZYUNkWNsu4P0A7j_i6L0r95CLvCbPtqquUy26kTXW8bsGKkX7en7mTUPSkUlGgNmQgUcW4Syc4qSb4H8EGUIvv6qkveS-RKsYSe7xEHWFWLaifYj3XICtqwE',
    alt: 'Checkout Experience',
    category: 'Business Growth',
    date: 'April 28, 2024',
    title: 'How to Improve Checkout Experience and Boost Conversion Rates',
    excerpt: 'Simple strategies to optimize your payment flow, reduce cart abandonment, and create a seamless buyer journey for your customers.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-hgESApelM3kreNKlbYsF8QNtav8enO5CnMpwBVF-zafk0k5ttguQuVMDxotF3oIEj5lmZblex0OhHav0zftnsPOCtWaW72nl4zHOMWbKyCctbKm7Hi_KpQaOOxGKuVJOsmPgFt9D9-IynwjQH73fZc5hy9iYhpHbW9OL8FBJj1dgJ8CHxaUxFxupdU8UKBFkRlYnMTMhKfyVRua2-vVNprJYrKdgd9FPIEvhpQgA8FncGiFIFzp65nLVD1QmPnDLgtNp31m0R1U',
    alt: 'Data Security',
    category: 'Security',
    date: 'April 12, 2024',
    title: 'How We Keep Your Transactions Safe and Secure 24/7',
    excerpt: "An inside look at NorveXPay's multi-layered security infrastructure, from PCI compliance to real-time AI threat detection.",
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQfP-Fp81PhNg5Zip2aDn-EgldwxCHKq0YC9pIYCMiGPPs4kqKrnDDdwsMFE6tkvVVEnZKsRdHX8lBKL8x_2kdspkDRhVbliK7AV8MfxcR85C_VhnfwP69HTzbG61KhztrfgZrLDHnsJc6SP2JlMs_f4B5UscRaGTi4dftez8dohzwDOXV1R-w2kfi4QtC90aKqy83WinNw5-JR6TaPVceGUqgle6fpTFIzYS4lKMgFpQEs0UBf118fjo06aidzMzBTxyI1zlNklE',
    alt: 'Split Settlements',
    category: 'Product Updates',
    date: 'March 22, 2024',
    title: 'Introducing Split Settlements for Marketplace Platforms',
    excerpt: 'Manage complex vendor payouts automatically. Now you can split payments and send funds to multiple bank accounts in real-time.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArjhVghSpS6cslCQZqrhhEz4RwkpNO1OqXnwHem2-XEANZ_VaxaMYYw1lGgVWslRU0tWx2XITc7255q6NUtmaYRgfrylBWK5lkBKmI-i9CayybCJ18gamz-aeZPlQ3usUDb3lwdbQ8-Fq9s7U5dOErHnjWprM4HOFQNI4pNXBZa49xOX-smknAQNuZyMMm1K9PNp_TdSpFi-qN7JJEjb1CRi7o6pmxWGwYxHGnTcwNRNSUMg1cPlHwfoIEuoxcgJyjMBzdoXvWidM',
    alt: 'Server Infrastructure',
    category: 'Engineering',
    date: 'March 05, 2024',
    title: 'Scaling to 10k Transactions Per Second: A Technical Deep Dive',
    excerpt: 'Our engineering team shares the architecture behind our high-availability gateway and how we maintain 99.99% uptime.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsY1HT86nJ_21keC46g2ouJaIQgZTIJIkqEPNmuObw4nOjeOIKq3vrJdCgGzlHMFge7aW9ef3z7ZAZoLDVr_1zmrJbA2HVTbO1QVmhFgJbUaFlomuUTUh33N5zJcpzo8V_okrvcC5WmVe0jL65tcpgRjwaSjdJAtlKjVGLdXBkHp0zY_6qjHAFpswWGEJ6wMnd_74QaXKMvaJLBuWLVljnRnFUjpV894k6Lh8hXae1t_vT7j5pEFRJuqMMy-0FYh2JOgTjm79Gqzc',
    alt: 'Global Economy',
    category: 'Business Growth',
    date: 'Feb 18, 2024',
    title: 'Winning the Global Market: Localization Strategies for SaaS',
    excerpt: 'Learn why offering local payment methods is the single biggest lever for international expansion in the current market.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZxGeNsbCaNOHFgMhNeIyK4iWjCs6-h9UalPGX0R0EK-oUnBS3-aOA-pE4H2WgZWltm_mbxRCMYFNVvIIjUGnjoVe0eU3QAY42tnZk76-AhyUTHERSKqogiHCPFx1hD9_qZySUdmo-578HkRWrymlUJEaz2dyUV2UHbPSz3NjEe_ODwfZeJh5VfuonhhYQTfyKLi4EF7h6RVbYgGCZ4VVYC7nSUsASIFK0Q8PlwAI4Hl0GzAjDFtuLvPHQzzHmc4hM0XqzoEuke0',
    alt: 'Blockchain Tech',
    category: 'Engineering',
    date: 'Feb 02, 2024',
    title: 'The Role of Ledger Technology in Modern Payment Processing',
    excerpt: 'Understanding immutable ledgers and how they provide the ultimate source of truth for high-volume financial transactions.',
  },
]

const categories = ['All Articles', 'Product Updates', 'Security', 'Business Growth', 'Engineering', 'Case Studies']

export default function BlogPage() {
  return (
    <>
      <div className="max-w-container-max mx-auto px-gutter pt-10 pb-20">
        {/* Breadcrumb + Header */}
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-on-surface-variant text-body-sm mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-medium">Blog</span>
          </nav>
          <h1 className="font-headline-lg text-headline-lg mb-4" data-animate>Latest Insights &amp; Updates</h1>
          <p className="text-secondary max-w-2xl font-body-lg text-body-lg" data-animate data-delay="100">
            Explore the latest news, expert guides, and technical insights on the future of global payments, security, and fintech growth.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow" data-animate>
            <div className="lg:col-span-7 h-80 lg:h-auto overflow-hidden relative min-h-[320px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbiSGC7SwUmiB_cCyftp9kwIqUbP1lkolIcz5_tPgtEJjCIT-II4s6rTcAYjguoOzWepfMclMpcj2RSdndOIztMcQDPgflmvCveyJQFb0mMyiiWzf3zBLBYUhV_NYOKrqs8gwHmqwtcLD_oAz1Bvz2gIdcBNry5XIjk5AiXv7RR06Vh9A2V4zZTHhU9O-fL6rW85fDbcNntpLDE4dqyNBz2pLlrUdJPjphuX9kKabfsa-VizdlkH-98t-Wu0IYpaet2gmzBVTyTWM"
                alt="Digital Fintech Future"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
            <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-caps text-label-caps rounded-full self-start mb-6">
                FEATURED STORY
              </span>
              <h2 className="font-headline-lg text-headline-lg leading-tight mb-4">
                The Future of Online Payments and What It Means for Global Businesses
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                Dive deep into our 2024 forecast on cross-border transactions, AI-driven fraud prevention, and the rise of unified commerce platforms.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <div>
                    <p className="text-on-surface font-semibold text-body-sm">James Donovan</p>
                    <p className="text-on-surface-variant text-xs">May 15, 2024 • 8 min read</p>
                  </div>
                </div>
                <Link href="#" className="flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Read More
                  <span className="material-symbols-outlined ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <BlogFilters posts={blogPosts} categories={categories} />

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mt-20">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                n === 1 ? 'accent_gradient text-white' : 'border border-outline-variant text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {n}
            </button>
          ))}
          <span className="px-2 text-on-surface-variant">...</span>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all">10</button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-surface-container-high py-24">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-surface rounded-3xl p-10 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center gap-12 border border-outline-variant/30 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h2 className="font-headline-lg text-headline-lg mb-4">Stay Ahead of the Curve</h2>
              <p className="text-secondary font-body-lg text-body-lg">
                Get the latest insights on fintech trends, security best practices, and product updates delivered straight to your inbox once a month.
              </p>
            </div>
            <div className="lg:w-1/2 w-full relative z-10">
              <NewsletterForm />
              <p className="text-on-surface-variant text-xs mt-4 text-center lg:text-left">
                Join 50,000+ industry leaders. No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
