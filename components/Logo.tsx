import Link from 'next/link'

export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="nvp-hex-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FFD060" />
          <stop offset="50%"  stopColor="#CC8800" />
          <stop offset="100%" stopColor="#7A4800" />
        </linearGradient>
      </defs>

      {/*
        Tilted golden hexagon (pointy-top, rotated 20 °) with a
        lightning-bolt punched out through the centre via evenodd fill.

        Hexagon: M 32,4 L 56,18 L 56,46 L 32,60 L 8,46 L 8,18 Z
        Bolt:    8-point polygon, classic ⚡ shape centred at (32,32)
                 — wide head at top, jag at y=31, narrower tail to bottom
      */}
      <g transform="rotate(20, 32, 32)">
        <path
          fillRule="evenodd"
          fill="url(#nvp-hex-g)"
          d={[
            'M 32,4 L 56,18 L 56,46 L 32,60 L 8,46 L 8,18 Z',
            'M 26,13 L 38,13 L 32,31 L 38,31 L 32,50 L 22,50 L 28,31 L 22,31 Z',
          ].join(' ')}
        />
      </g>
    </svg>
  )
}

interface LogoProps {
  size?: number
  textClass?: string
}

export default function Logo({ size = 36, textClass = 'text-xl' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <LogoIcon size={size} />
      <span className={`font-bold tracking-tight ${textClass}`}>
        <span className="text-on-background">NorveX</span>
        <span className="text-primary">Pay</span>
      </span>
    </Link>
  )
}
