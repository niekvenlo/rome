<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'
import { getSearchResults } from '../services/data-access'
import NamedCaroussel from '../components/NamedCaroussel.vue'
import type { Result, VueQueryResponse } from '../types'

const q = ref('')
const {
  isLoading,
  isError,
  data: results
} = useQuery(['search', q], () => getSearchResults(q.value)) as VueQueryResponse<Result[]>

const isResultsFound = computed(() => q.value && !isLoading.value && !results.value?.length)
</script>

<template>
  <h2 v-if="isError">Apologies. Something went wrong ...</h2>
  <p>Please enter a search term</p>
  <div class="search-inputs">
    <input v-model.lazy="q" placeholder="e.g. Lost" />
    <button>Search</button>
  </div>

  <p v-if="isLoading">Searching for "{{ q }}"</p>
  <p v-if="isResultsFound">No results found for "{{ q }}"</p>
  <NamedCaroussel :name="q" :shows="results.map((r) => r.show)" v-if="results?.length" />
</template>
