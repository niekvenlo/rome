<script setup lang="ts">
import { stringToHue } from '../utils/index'
const props = defineProps<{
  pills?: string[]
}>()

const simplifyGenreName = (name: string) => (name === 'Science-Fiction' ? 'Sci-Fi' : name)
</script>

<template>
  <div class="pill-list" v-if="props.pills">
    <span
      v-for="pill in props.pills"
      :key="pill"
      :style="{ background: `hsla(${stringToHue(pill)}, 60%, var(--lightness), 0.8` }"
    >
      {{ simplifyGenreName(pill) }}
    </span>
  </div>
</template>
