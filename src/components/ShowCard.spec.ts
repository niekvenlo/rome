import { it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ShowCard from './ShowCard.vue'
import type { Show } from '../types'

it('should render a basic card', () => {
  const wrapper = shallowMount(ShowCard, {
    propsData: {
      show: {
        name: 'name',
        id: 3,
        rating: { average: 4.1 }
      } as Show
    },
    stubs: {
      PillList: { template: '<div class="stubbed" />' }
    }
  })
  expect(wrapper.find('.show-card')).toBeTruthy()
  expect(wrapper.find('.show-card .gradient').text()).toBe('name 4.1')
})
