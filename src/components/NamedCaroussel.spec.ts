import { it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NamedCaroussel from './NamedCaroussel.vue'
import type { Show } from '../types'

it('should render correctly without shows', () => {
  const wrapper = shallowMount(NamedCaroussel, {
    propsData: {
      name: 'Science-Fiction',
      shows: []
    }
  })
  expect(wrapper.find('.caroussel')).toBeTruthy()
  expect(wrapper.find('.caroussel h2').text()).toBe('Science-Fiction (0 shows)')
})

it('should render correctly with shows', () => {
  const wrapper = shallowMount(NamedCaroussel, {
    propsData: {
      name: 'Science-Fiction',
      shows: [{ name: 'name', id: 3, rating: { average: 4.1 } } as Show]
    }
  })
  expect(wrapper.find('.caroussel')).toBeTruthy()
  expect(wrapper.find('.caroussel h2').text()).toBe('Science-Fiction (1 show)')
  expect(wrapper.findAll('.caroussel .cards *').length).toBe(1)
})
