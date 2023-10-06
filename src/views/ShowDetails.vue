<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from 'vue-query'
import { useRoute } from 'vue-router'
import { getShow } from '../services/data-access'
import PillList from '../components/PillList.vue'
import type { Show, VueQueryResponse } from '../types'

const route = useRoute()

const showId = Number(route.params.id)

const isValidId = !Number.isNaN(showId) && showId > 0

const {
  isLoading,
  isError,
  data: show
} = useQuery(['show', showId], () => getShow(showId), {
  enabled: isValidId
}) as VueQueryResponse<Show>

const safeSummary = computed(() => show.value?.summary.replace(/<[a-z/]*>/g, ''))
const getYear = (dateString = '') => dateString?.split('-')[0]
</script>

<template>
  <div class="show" v-if="isLoading || isError || !isValidId">
    <h1>Show ID {{ showId }}</h1>
    <h2 v-if="isLoading">Loading show ...</h2>
    <h2 v-if="isError">Apologies. Something went wrong ...</h2>
    <h2 v-if="!isValidId">Invalid show ID: {{ route.params.id }}</h2>
  </div>
  <div class="show" v-else>
    <div class="main-image">
      <img :src="show?.image?.medium" aria-hidden="true" />
      <div v-if="!show?.image?.medium" class="no-image">no image</div>
    </div>
    <h1>
      {{ show?.name }}
      <span class="rating"
        >{{ show?.rating?.average }}<span class="emoji" aria-hidden="true">⭐</span></span
      >
    </h1>
    <h2 class="fields">{{ show?.type }} | {{ show?.language }} | {{ show?.status }}</h2>
    <h3 class="ran-from">
      {{ show?.status === 'Running' ? 'Running' : 'Ran' }}
      from
      {{ getYear(show?.premiered) }}
      to
      {{ getYear(show?.ended) || 'now' }}
    </h3>
    <div class="summary">{{ safeSummary }}</div>
    <PillList :pills="show?.genres" class="genres" />
  </div>
</template>

<style scoped lang="scss">
.show {
  display: grid;
  gap: 1em;
  grid-template-areas:
    'image title'
    'image fields'
    'image ran-from'
    'image summary'
    'genres .';
}
.main-image {
  grid-area: image;
  text-align: center;
}
h1 {
  grid-area: title;
  font-weight: 600;
}

.fields {
  grid-area: fields;
}
.ran-from {
  grid-area: ran-from;
}
.summary {
  grid-area: summary;
  max-width: 600px;
}
.genres {
  grid-area: genres;
  max-width: 600px;
}

.rating {
  align-items: center;
  display: inline-flex;
  font-weight: 300;
  filter: contrast(0.1);
  .emoji {
    font-size: 0.6em;
    padding-left: 0.1em;
  }
}

.no-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: var(--alt-background-color);
}

@media only screen and (max-width: 992px) {
  .show {
    grid-template-areas:
      'title'
      'image'
      'fields'
      'summary'
      'ran-from'
      'genres';
  }
  .main-image {
    text-align: inherit;
  }
}
</style>
