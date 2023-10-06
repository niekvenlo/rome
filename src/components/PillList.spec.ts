import { it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PillList from './PillList.vue'

it('should render correctly', () => {
  const wrapper = shallowMount(PillList, {
    propsData: {
      pills: ['Drama', 'Science-Fiction']
    }
  })
  expect(wrapper.find('.pill-list')).toBeTruthy()
  expect(wrapper.findAll('.pill-list span').length).toBe(2)
  expect(wrapper.find('.pill-list').text()).toBe('DramaSci-Fi')
})
