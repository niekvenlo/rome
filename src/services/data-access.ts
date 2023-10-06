import type { Show } from '../types'

// This import mocks the global fetch function, so the application
// will no longer hit up the actual https://api.tvmaze.com API,
// but will use local mock data instead.
import '../mock/mockFetch'

export const getShows = async (): Promise<Show[]> => {
  const response = await fetch('https://api.tvmaze.com/shows')
  return response.json()
}

export const getShow = async (id: number): Promise<Show> => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return response.json()
}

export const getSearchResults = async (q: string): Promise<Show[]> => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`)
  return response.json()
}
