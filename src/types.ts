export type CardAccent =
  | 'blue'
  | 'green'
  | 'red'
  | 'orange'
  | 'purple'
  | 'teal'
  | 'navy'

export interface NounCard {
  kind: 'noun'
  title: string
  accent: CardAccent
  topic: string
  /** Sentence stems built around a noun focus; aim for ~3–5 words */
  stems: string[]
}

export interface VerbRow {
  verbStart: string
  completion: string
}

export interface VerbCard {
  kind: 'verb'
  title: string
  accent: CardAccent
  rows: VerbRow[]
}

export interface PrepCard {
  kind: 'prep'
  title: string
  accent: CardAccent
  topic?: string
  stems: string[]
}

export type ActivityCard = NounCard | VerbCard | PrepCard

export interface WeekData {
  id: string
  label: string
  /** Six columns — one activity each (three left, three right). */
  columns: ActivityCard[]
}
