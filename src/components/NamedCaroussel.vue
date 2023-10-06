<script setup lang="ts">
import { computed } from 'vue'
import type { Show } from '../types'
import ShowCard from './ShowCard.vue'

const props = defineProps<{
  name: string
  shows: Show[]
}>()

const countText = computed(
  () => `${props.shows?.length} ${props.shows?.length === 1 ? 'show' : 'shows'}`
)
</script>

<template>
  <div class="caroussel">
    <h2>
      {{ props.name }}
      <span v-if="props.shows">({{ countText }})</span>
    </h2>
    <div class="cards">
      <ShowCard v-for="show in props.shows" :show="show" :key="show.id" />
    </div>
  </div>
</template>
