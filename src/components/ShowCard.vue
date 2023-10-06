<script setup lang="ts">
import type { Show } from '../types'
import PillList from './PillList.vue'
const props = defineProps<{ show: Show }>()
</script>

<template>
  <RouterLink
    class="show-card"
    :to="`/shows/${props.show.id}`"
    :style="{ backgroundImage: `url(${props.show.image?.medium}` }"
  >
    <div class="gradient">
      {{ props.show.name }}
      <span class="rating">{{ props.show.rating?.average || '' }}</span>
    </div>
    <div v-if="!props.show.image?.medium" class="no-image">No image available</div>
    <PillList :pills="props.show.genres" />
  </RouterLink>
</template>

<style scoped>
.no-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
