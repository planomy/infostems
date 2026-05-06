import type {
  ActivityCard,
  CardAccent,
  NounCard,
  PrepCard,
  VerbCard,
  VerbRow,
} from '../types'
import { collapsePair } from '../columnCollapse'
import type { SentenceBands } from './olderSets'
import { OLDER_SETS } from './olderSets'
import { JUNIOR_SETS } from './juniorSets'

function dupPrepPair(
  stems: string[],
  accent: CardAccent,
  topic: string,
): [ActivityCard, ActivityCard] {
  const card: PrepCard = {
    kind: 'prep',
    title: 'Prepositional starts',
    accent,
    topic,
    stems: [...stems],
  }
  return [card, { ...card, stems: [...stems] }]
}

function verbPair(rows: VerbRow[], accent: CardAccent): [ActivityCard, ActivityCard] {
  const verb: VerbCard = {
    kind: 'verb',
    title: 'Verb starts',
    accent,
    rows,
  }
  const filler: NounCard = {
    kind: 'noun',
    title: 'Noun sentence starts',
    accent: 'blue',
    topic: '',
    stems: ['—', '—', '—', '—'],
  }
  return [filler, verb]
}

function weekHalfThreeBands(
  params: SentenceBands,
  accents: { mixed: CardAccent; verb: CardAccent; logic: CardAccent },
): ActivityCard[][] {
  const { mixed, mixedTopic, verbs, logic, logicTopic } = params
  return [
    dupPrepPair(mixed, accents.mixed, mixedTopic),
    verbPair(verbs, accents.verb),
    dupPrepPair(logic, accents.logic, logicTopic),
  ]
}

function weekColumnsYoungLeftSeniorRight(
  young: SentenceBands,
  senior: SentenceBands,
): ActivityCard[][] {
  return [
    ...weekHalfThreeBands(young, {
      mixed: 'blue',
      verb: 'red',
      logic: 'teal',
    }),
    ...weekHalfThreeBands(senior, {
      mixed: 'green',
      verb: 'orange',
      logic: 'purple',
    }),
  ]
}

/** Collapsed activity columns (six): junior half then senior half. */
export function buildPairedSheetColumns(
  juniorIndex: number,
  seniorIndex: number,
): ActivityCard[] {
  const j = Math.max(0, Math.min(JUNIOR_SETS.length - 1, juniorIndex))
  const s = Math.max(0, Math.min(OLDER_SETS.length - 1, seniorIndex))
  const nested = weekColumnsYoungLeftSeniorRight(JUNIOR_SETS[j], OLDER_SETS[s])
  return nested.map((pair) => collapsePair(pair[0], pair[1]))
}

export const JUNIOR_SET_COUNT = JUNIOR_SETS.length
export const SENIOR_SET_COUNT = OLDER_SETS.length
