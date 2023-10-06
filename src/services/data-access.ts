import type { Show } from '../types'

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
