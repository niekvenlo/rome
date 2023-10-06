import { beforeEach, vi, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import type { Show } from '../types'

const response = {
  isLoading: false,
  isError: false,
  data: { value: [] as Show[] }
}
vi.mock('vue-query', () => ({
  useQuery: () => response
}))

beforeEach(() => {
  response.isLoading = false
  response.isError = false
  response.data = { value: [] }
})

it('should show a loading indicator', () => {
  response.isLoading = true
  const wrapper = shallowMount(HomeView)
  expect(wrapper.find('h2').text()).toBe('Loading shows ...')
})

it('should show an error indicator', () => {
  response.isError = true
  const wrapper = shallowMount(HomeView)
  expect(wrapper.find('h2').text()).toBe('Apologies. Something went wrong ...')
  expect((wrapper.vm as any).genrePairs).toStrictEqual([])
})

it('should show no warning indicators', () => {
  const wrapper = shallowMount(HomeView)
  expect(wrapper.findAll('h2').length).toBe(0)
})

it('should generate valid genrePairs', () => {
  const show = { genres: ['Drama', 'Science-Fiction'], rating: { average: 4 } }
  response.data.value = [show, show, show, show, show] as Show[]
  const wrapper = shallowMount(HomeView)
  expect((wrapper.vm as any).genrePairs).toStrictEqual([
    ['Drama', [show, show, show, show, show]],
    ['Science-Fiction', [show, show, show, show, show]]
  ])
})
