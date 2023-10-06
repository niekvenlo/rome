<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useQueryClient } from 'vue-query'

useQueryClient().setDefaultOptions({
  queries: {
    staleTime: Infinity
  }
})
</script>

<template>
  <header>
    <RouterLink to="/">All Shows</RouterLink>
    <RouterLink to="/search">Search</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>
