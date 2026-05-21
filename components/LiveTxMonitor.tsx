'use client'

import { useEffect, useState } from 'react'

const transactions = [
  { flag: '🇳🇬', city: 'Lagos',       card: '•••• 4821', amount: '$2,400.00' },
  { flag: '🇬🇧', city: 'London',      card: '•••• 7293', amount: '£1,850.00' },
  { flag: '🇺🇸', city: 'New York',    card: '•••• 5571', amount: '$890.00'   },
  { flag: '🇩🇪', city: 'Berlin',      card: '•••• 3394', amount: '€1,200.00' },
  { flag: '🇯🇵', city: 'Tokyo',       card: '•••• 8823', amount: '¥145,000'  },
  { flag: '🇿🇦', city: 'Cape Town',   card: '•••• 2210', amount: 'R18,500'   },
  { flag: '🇸🇬', city: 'Singapore',   card: '•••• 9943', amount: 'S$3,200'   },
  { flag: '🇦🇪', city: 'Dubai',       card: '•••• 6617', amount: 'AED 8,400' },
  { flag: '🇧🇷', city: 'São Paulo',   card: '•••• 1134', amount: 'R$4,750'   },
  { flag: '🇰🇪', city: 'Nairobi',     card: '•••• 7782', amount: 'KES 58,000'},
  { flag: '🇨🇦', city: 'Toronto',     card: '•••• 4419', amount: 'C$1,990'   },
  { flag: '🇫🇷', city: 'Paris',       card: '•••• 3387', amount: '€950.00'   },
  { flag: '🇦🇺', city: 'Sydney',      card: '•••• 2256', amount: 'A$2,100'   },
  { flag: '🇮🇳', city: 'Mumbai',      card: '•••• 8891', amount: '₹84,000'   },
  { flag: '🇲🇽', city: 'Mexico City', card: '•••• 5543', amount: 'MX$9,200'  },
]

const fmt = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1_000).toFixed(0)}K`

export default function LiveTxMonitor() {
  const [feed, setFeed] = useState(transactions.slice(0, 5))
  const [processed, setProcessed] = useState(2_100_000)
  const [txCount, setTxCount] = useState(14_302)

  useEffect(() => {
    const id = setInterval(() => {
      const next = transactions[Math.floor(Math.random() * transactions.length)]
      setFeed(prev => [next, ...prev.slice(0, 4)])
      setProcessed(p => p + Math.floor(Math.random() * 5_000 + 1_000))
      setTxCount(c => c + Math.floor(Math.random() * 3 + 1))
    }, 1_800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="glass-card rounded-2xl overflow-hidden float-shadow">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/20 bg-primary/5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="text-xs font-mono ml-2 text-on-surface-variant">NorveXPay · Live Monitor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="status-dot" />
          <span className="text-xs font-semibold text-tertiary">Live</span>
        </div>
      </div>

      {/* Transaction feed */}
      <div className="overflow-hidden" style={{ height: '230px' }}>
        {feed.map((tx, i) => (
          <div
            key={`${i}-${tx.city}`}
            className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/10 last:border-b-0"
            style={{ animation: i === 0 ? 'slide-up-fade 0.4s ease forwards' : 'none' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{tx.flag}</span>
              <div>
                <div className="text-xs font-semibold text-on-background">{tx.city}</div>
                <div className="text-xs font-mono text-on-surface-variant">{tx.card}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-on-background">{tx.amount}</span>
              <span
                className="text-xs px-1.5 py-0.5 rounded font-mono"
                style={{ background: 'rgba(0, 109, 44, 0.1)', color: '#006d2c' }}
              >
                ✓
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats footer */}
      <div className="flex border-t border-outline-variant/20">
        {[
          { value: fmt(processed), label: 'last hour' },
          { value: txCount.toLocaleString(), label: 'today' },
          { value: '99.99%', label: 'uptime' },
        ].map((m, i) => (
          <div
            key={i}
            className="flex-1 px-3 py-3 text-center border-r border-outline-variant/20 last:border-r-0 bg-primary/5"
          >
            <div className="text-sm font-bold font-mono text-primary">{m.value}</div>
            <div className="text-xs text-on-surface-variant mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
