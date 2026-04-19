/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react'
import styles from './finder.module.css'
import type { UnsplashPhoto } from '@/types'

const ORIENTATIONS = ['any', 'landscape', 'portrait', 'squarish'] as const
const COLORS = ['any', 'black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'] as const
const SORT_OPTIONS = [
  { value: 'relevant', label: 'Relevance' },
  { value: 'latest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'likes', label: 'Most Liked' },
] as const

type Orientation = typeof ORIENTATIONS[number]
type Color = typeof COLORS[number]
type SortOption = typeof SORT_OPTIONS[number]['value']

export default function Finder() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<UnsplashPhoto[]>([])
  const [orientation, setOrientation] = useState<Orientation>('any')
  const [color, setColor] = useState<Color>('any')
  const [sortBy, setSortBy] = useState<SortOption>('relevant')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (query.trim() === '') return

    setIsLoading(true)
    setHasSearched(true)

    try {
      const params = new URLSearchParams({
        query,
        client_id: 'xiYVQVRu32EgmLBRl4TyTffC7WU85fsqs1vtRxVj8Qg',
        per_page: '24',
        order_by: sortBy === 'oldest' ? 'latest' : sortBy, // Unsplash doesn't have 'oldest', reverse
      })

      if (orientation !== 'any') params.append('orientation', orientation)
      if (color !== 'any') params.append('color', color)

      const response = await fetch(`https://api.unsplash.com/search/photos?${params}`)
      const data = await response.json()

      let photos: UnsplashPhoto[] = data.results ?? []

      if (sortBy === 'oldest') photos = [...photos].reverse()
      if (sortBy === 'likes') photos = [...photos].sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))

      setResults(photos)
    } catch (error) {
      console.log('Error fetching data from Unsplash API:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Photo Finder</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Search row */}
        <div className={styles.searchRow}>
          <input
            type="text"
            placeholder="Search for photos…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Searching…' : 'Search'}
          </button>
        </div>

        {/* Controls row */}
        <div className={styles.controls}>
          {/* Sort */}
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Sort by</label>
            <div className={styles.pills}>
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`${styles.pill} ${sortBy === opt.value ? styles.pillActive : ''}`}
                  onClick={() => setSortBy(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Orientation */}
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Orientation</label>
            <div className={styles.pills}>
              {ORIENTATIONS.map((o) => (
                <button
                  key={o}
                  type="button"
                  className={`${styles.pill} ${orientation === o ? styles.pillActive : ''}`}
                  onClick={() => setOrientation(o)}
                >
                  {o.charAt(0).toUpperCase() + o.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Color</label>
            <div className={styles.colorSwatches}>
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  title={c.replace('_', ' ')}
                  className={`${styles.swatch} ${color === c ? styles.swatchActive : ''}`}
                  style={c === 'any' ? undefined : { backgroundColor: c === 'black_and_white' ? 'linear-gradient(to right,#000,#fff)' : c }}
                  onClick={() => setColor(c)}
                >
                  {c === 'any' && <span className={styles.swatchAny}>Any</span>}
                  {c === 'black_and_white' && (
                    <span
                      className={styles.swatchBW}
                      style={{ background: 'linear-gradient(135deg,#000 50%,#fff 50%)' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </form>

      {/* Results */}
      {hasSearched && !isLoading && results.length === 0 && (
        <p className={styles.emptyState}>No photos found. Try a different search or filters.</p>
      )}

      <div className={styles.results}>
        {results.map((photo) => (
          <div key={photo.id} className={styles['result-item']}>
            <img
              src={photo.urls.regular}
              alt={photo.alt_description ?? ''}
            />
            {photo.likes != null && (
              <div className={styles.photoMeta}>
                <span className={styles.likes}>♥ {photo.likes.toLocaleString()}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
