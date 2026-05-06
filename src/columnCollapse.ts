import type { ActivityCard, NounCard, PrepCard } from './types'

/** Each card shows exactly this many prompts after collapse. */
export const EXERCISES_PER_SECTION = 5

function trimStems(stems: string[]): string[] {
  return stems.slice(0, EXERCISES_PER_SECTION)
}

function trimRows<T extends { verbStart: string; completion: string }>(
  rows: T[],
): T[] {
  return rows.slice(0, EXERCISES_PER_SECTION)
}

/** Turn the former two-part column into a single activity (verb beats lists). */
export function collapsePair(a: ActivityCard, b: ActivityCard): ActivityCard {
  if (a.kind === 'verb')
    return { ...a, rows: trimRows(a.rows) }
  if (b.kind === 'verb')
    return { ...b, rows: trimRows(b.rows) }

  const stems = trimStems([...a.stems, ...b.stems])
  const ta = a.topic?.trim() ?? ''
  const tb = b.topic?.trim() ?? ''
  const topicMerged = [ta, tb].filter(Boolean).join(' · ') || 'Practice'

  if (a.kind === 'prep' && b.kind === 'prep') {
    const out: PrepCard = {
      kind: 'prep',
      title: 'Prepositional starts',
      accent: a.accent,
      topic: topicMerged === 'Practice' ? undefined : topicMerged,
      stems,
    }
    return out
  }

  const out: NounCard = {
    kind: 'noun',
    title: 'Noun sentence starts',
    accent: a.accent,
    topic: topicMerged,
    stems,
  }
  return out
}
