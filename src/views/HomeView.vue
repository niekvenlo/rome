<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from 'vue-query'
import { getShows } from '../services/data-access'
import { batchByGenre } from '../services/data-transform'
import NamedCaroussel from '../components/NamedCaroussel.vue'
import type { Show, VueQueryResponse } from '../types'

const {
  isLoading,
  isError,
  data: shows
} = useQuery('shows', getShows, { staleTime: 10000 }) as VueQueryResponse<Show[]>

const genrePairs = computed(() => batchByGenre(shows.value))
</script>

<template>
  <h2 v-if="isLoading">Loading shows ...</h2>
  <h2 v-if="isError">Apologies. Something went wrong ...</h2>
  <NamedCaroussel
    v-for="[genre, genreShows] in genrePairs"
    :key="genre"
    :name="genre"
    :shows="genreShows"
  />
</template>
