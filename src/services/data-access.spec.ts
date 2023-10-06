import { vi, it, expect } from 'vitest'
import { getSearchResults, getShow, getShows } from './data-access'

const fetch = vi.fn()
globalThis.fetch = fetch

it('should check that getShows hits up the correct endpoint', () => {
  fetch.mockResolvedValue({ json: () => 'data' })
  getShows()
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows')
})

it('should check that getShow hits up the correct endpoint', () => {
  fetch.mockResolvedValue({ json: () => 'data' })
  getShow(4)
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows/4')
})

it('should check that getSearchResults hits up the correct endpoint', () => {
  fetch.mockResolvedValue({ json: () => 'data' })
  getSearchResults('test')
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/search/shows?q=test')
})
