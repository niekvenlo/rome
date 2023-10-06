import type { Show } from '../types'

export const batchByGenre = (shows: Show[] = []) => {
  /**
   * Batch the shows by genre.
   * We sort the genres by number of shows in each, and sort the shows within each genre by average rating.
   * e.g. [
   *   ['Drama', {name: 'Breaking Bad', {name: 'Dallas'}}],
   *   ['Legal', {name: 'The Good Wife', {name: 'Benched'}}],
   * ]
   * This makes it easy to loop over these genres for display.
   */
  // We count each genre
  const genreCount = new Map<string, number>()
  shows.forEach(({ genres }) => {
    genres.forEach((genre) => {
      genreCount.set(genre, (genreCount.get(genre) || 0) + 1)
    })
  })
  // Sort genres by occurrence and remove uncommon genres
  const sortedUniqueGenres = [...genreCount.entries()]
    .filter(([, value]) => value > 4)
    // Sort by count
    .sort(([, aValue], [, bValue]) => (aValue > bValue ? -1 : 1))
    .map(([genre]) => genre)
  // And return an array of pairs: genre and shows matching that genre, [string, Show[]][]
  const entries = sortedUniqueGenres.map((genre) => {
    const matchingShows = shows
      ?.filter((show) => show.genres.includes(genre))
      // Sort by average rating
      .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
    return [genre, matchingShows]
  }) as unknown as [string, Show[]][]
  return entries
}
