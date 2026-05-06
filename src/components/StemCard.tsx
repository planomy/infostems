import {
  Fragment,
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import type { ActivityCard, VerbRow } from '../types'

const ACCENT_VARS: Record<
  ActivityCard['accent'],
  { header: string; glow: string }
> = {
  blue: { header: '#1d4ed8', glow: 'rgba(37, 99, 235, 0.35)' },
  green: { header: '#15803d', glow: 'rgba(22, 163, 74, 0.35)' },
  red: { header: '#b91c1c', glow: 'rgba(220, 38, 38, 0.35)' },
  orange: { header: '#c2410c', glow: 'rgba(234, 88, 12, 0.35)' },
  purple: { header: '#7e22ce', glow: 'rgba(147, 51, 234, 0.35)' },
  teal: { header: '#0f766e', glow: 'rgba(13, 148, 136, 0.35)' },
  navy: { header: '#1e3a5f', glow: 'rgba(30, 58, 95, 0.45)' },
}

function shuffleOrder(length: number): number[] {
  const order = Array.from({ length }, (_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}

export function activityKindLabel(card: ActivityCard): string {
  switch (card.kind) {
    case 'noun':
      return 'Noun starts'
    case 'verb':
      return 'Verb starts'
    case 'prep':
      return 'Prepositional starts'
  }
}
function shuffleDescription(card: ActivityCard, setLabel: string): string {
  if (card.kind !== 'verb' && card.topic) return `${setLabel} · ${card.topic}`
  return setLabel
}

type Props = {
  card: ActivityCard
  cardId: string
  setLabel: string
}

export function StemCard({ card, cardId, setLabel }: Props) {
  const itemCount =
    card.kind === 'verb' ? card.rows.length : card.stems.length
  const [order, setOrder] = useState<number[]>(() =>
    Array.from({ length: itemCount }, (_, i) => i),
  )

  useEffect(() => {
    setOrder(Array.from({ length: itemCount }, (_, i) => i))
  }, [cardId, itemCount])

  const roll = useCallback(() => {
    setOrder(shuffleOrder(itemCount))
  }, [itemCount])

  const palette = ACCENT_VARS[card.accent]

  const cardStyle: CSSProperties = {
    '--card-header': palette.header,
    '--card-glow': palette.glow,
  } as CSSProperties

  const verbRows: VerbRow[] =
    card.kind === 'verb' ? order.map((i) => card.rows[i]) : []

  const listStems: string[] =
    card.kind !== 'verb' ? order.map((i) => card.stems[i]) : []

  return (
    <article className="stem-card" style={cardStyle}>
      <header className="stem-card__head">
        <div className="stem-card__titles">
          <p className="stem-card__topic">{setLabel}</p>
        </div>
        <button
          type="button"
          className="stem-card__dice"
          aria-label={`Shuffle prompts for ${shuffleDescription(card, setLabel)}`}
          title="Shuffle order"
          onClick={roll}
        >
          <DiceIcon />
        </button>
      </header>

      <div className="stem-card__body">
        {card.kind === 'verb' ? (
          <VerbFlowLines rows={verbRows} cardId={cardId} />
        ) : (
          <ul className="stem-card__list">
            {listStems.map((stem, idx) => (
              <li key={`${cardId}-s-${idx}`}>{stem}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

const BLANK_DISPLAY = '______'

/** Join participle + tail into one sentence; underscores in data render as seven-dot blanks. */
function verbFlowParts(row: VerbRow): ReactNode[] {
  const tail = row.completion
  const full =
    tail.startsWith(',') || tail.startsWith('.')
      ? `${row.verbStart}${tail}`
      : `${row.verbStart} ${tail}`
  const segments = full.split(/(_{3,})/g)
  const out: ReactNode[] = []
  segments.forEach((segment, i) => {
    if (/^_{3,}$/.test(segment)) {
      out.push(
        <span key={i} className="stem-card__verb-slot">
          {BLANK_DISPLAY}
        </span>,
      )
    } else if (segment !== '') {
      out.push(<Fragment key={i}>{segment}</Fragment>)
    }
  })
  return out
}

function VerbFlowLines({
  rows,
  cardId,
}: {
  rows: VerbRow[]
  cardId: string
}) {
  return (
    <div className="stem-card__verb-flowlist">
      {rows.map((row, idx) => (
        <p
          className={`stem-card__verb-flow${idx % 2 ? ' stem-card__verb-flow--alt' : ''}`}
          key={`${cardId}-v-${idx}`}
        >
          {verbFlowParts(row)}
        </p>
      ))}
    </div>
  )
}

function DiceIcon() {
  return (
    <svg
      className="stem-card__dice-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.35" fill="currentColor" stroke="none" />
    </svg>
  )
}
