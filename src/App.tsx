import { useLayoutEffect, useMemo, useState } from 'react'
import { StemCard } from './components/StemCard'
import {
  buildPairedSheetColumns,
  JUNIOR_SET_COUNT,
  SENIOR_SET_COUNT,
} from './data/sheetLayout'
import {
  JUNIOR_SET_TITLES,
  SENIOR_SET_TITLES,
} from './data/setMenuLabels'
import './App.css'

const FONT_STORAGE_KEY = 'infostems-font-size'
const FONT_MIN = 15
const FONT_MAX = 38
const FONT_DEFAULT = 23
const FONT_STEP = 2

function readStoredFontSize(): number {
  try {
    const raw = localStorage.getItem(FONT_STORAGE_KEY)
    if (raw) {
      const n = Number.parseInt(raw, 10)
      if (!Number.isNaN(n) && n >= FONT_MIN && n <= FONT_MAX) return n
    }
  } catch {
    /* ignore */
  }
  return FONT_DEFAULT
}

export default function App() {
  const [juniorIndex, setJuniorIndex] = useState(0)
  const [seniorIndex, setSeniorIndex] = useState(0)
  const [fontSizePx, setFontSizePx] = useState(readStoredFontSize)

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--app-font-size', `${fontSizePx}px`)
    try {
      localStorage.setItem(FONT_STORAGE_KEY, String(fontSizePx))
    } catch {
      /* ignore */
    }
  }, [fontSizePx])

  const columns = useMemo(
    () => buildPairedSheetColumns(juniorIndex, seniorIndex),
    [juniorIndex, seniorIndex],
  )

  const left = columns.slice(0, 3)
  const right = columns.slice(3, 6)
  const sheetKey = `j${juniorIndex}-s${seniorIndex}`
  const rowSetLabel = (rowIndex: number) => `Set ${rowIndex + 1}`

  return (
    <div className="app">
      <div className="app__grid-wrap">
        <header className="app__toolbar" role="region" aria-label="Sheet controls">
          <div className="app__toolbar__slot app__toolbar__slot--junior">
            <label className="set-picker set-picker--inline">
              <span className="set-picker__label">Junior</span>
              <select
                className="set-picker__select set-picker__select--grow"
                aria-label="Junior set"
                value={juniorIndex}
                onChange={(e) => setJuniorIndex(Number(e.target.value))}
              >
                {JUNIOR_SET_TITLES.slice(0, JUNIOR_SET_COUNT).map(
                  (title, i) => (
                    <option key={`j-${i}`} value={i}>
                      {title}
                    </option>
                  ),
                )}
              </select>
            </label>
          </div>
          <div className="app__toolbar__sep" aria-hidden="true" />
          <div className="app__toolbar__slot app__toolbar__slot--senior">
            <label className="set-picker set-picker--inline">
              <span className="set-picker__label">Senior</span>
              <select
                className="set-picker__select set-picker__select--grow"
                aria-label="Senior set"
                value={seniorIndex}
                onChange={(e) => setSeniorIndex(Number(e.target.value))}
              >
                {SENIOR_SET_TITLES.slice(0, SENIOR_SET_COUNT).map(
                  (title, i) => (
                    <option key={`s-${i}`} value={i}>
                      {title}
                    </option>
                  ),
                )}
              </select>
            </label>
            <div className="font-resizer" role="group" aria-label="Text size">
              <button
                type="button"
                className="font-resizer__btn"
                onClick={() =>
                  setFontSizePx((n) => Math.max(FONT_MIN, n - FONT_STEP))
                }
                disabled={fontSizePx <= FONT_MIN}
                aria-label="Smaller text"
              >
                A−
              </button>
              <span className="font-resizer__value" aria-live="polite">
                {fontSizePx}px
              </span>
              <button
                type="button"
                className="font-resizer__btn"
                onClick={() =>
                  setFontSizePx((n) => Math.min(FONT_MAX, n + FONT_STEP))
                }
                disabled={fontSizePx >= FONT_MAX}
                aria-label="Larger text"
              >
                A+
              </button>
            </div>
          </div>
        </header>

        <main className="app__grid">
          <div className="app__half" aria-label="Left half: three rows">
            {left.map((card, rowIndex) => (
              <section
                className="app__half-slot"
                key={`${sheetKey}-L-${rowIndex}`}
                aria-label={`Left row ${rowIndex + 1}`}
              >
                <StemCard
                  card={card}
                  cardId={`${sheetKey}-L${rowIndex}`}
                  setLabel={rowSetLabel(rowIndex)}
                />
              </section>
            ))}
          </div>

          <div className="app__half-sep" aria-hidden="true" />

          <div className="app__half" aria-label="Right half: three rows">
            {right.map((card, rowIndex) => (
              <section
                className="app__half-slot"
                key={`${sheetKey}-R-${rowIndex}`}
                aria-label={`Right row ${rowIndex + 1}`}
              >
                <StemCard
                  card={card}
                  cardId={`${sheetKey}-R${rowIndex}`}
                  setLabel={rowSetLabel(rowIndex)}
                />
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
