'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

type Post = {
  image: string
  alt: string
  category: string
  date: string
  title: string
  excerpt: string
}

type Props = {
  posts: Post[]
  categories: string[]
}

export default function BlogFilters({ posts, categories }: Props) {
  const [active, setActive] = useState('All Articles')
  const gridRef = useRef<HTMLElement>(null)

  const filtered = active === 'All Articles' ? posts : posts.filter((p) => p.category === active)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('article')
    if (!cards) return
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, i * 80)
    })
  }, [filtered])

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-outline-variant/30 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
              active === cat
                ? 'accent_gradient text-white shadow-sm'
                : 'bg-surface border border-outline-variant text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filtered.length > 0 ? (
        <section ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(({ image, alt, category, date, title, excerpt }) => (
            <article key={title} className="bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-tertiary font-label-caps text-label-caps tracking-wider uppercase">{category}</span>
                  <span className="text-on-surface-variant text-xs">{date}</span>
                </div>
                <h3 className="font-headline-md text-headline-md leading-snug mb-3">{title}</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm line-clamp-3 mb-6">{excerpt}</p>
                <Link
                  href="#"
                  className="mt-auto text-primary font-semibold flex items-center hover:translate-x-1 transition-transform"
                >
                  Read More
                  <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="text-center py-20 text-on-surface-variant">
          <span className="material-symbols-outlined text-5xl mb-4 block text-outline">article</span>
          <p className="font-body-lg text-body-lg">No articles in this category yet.</p>
        </div>
      )}
    </>
  )
}
