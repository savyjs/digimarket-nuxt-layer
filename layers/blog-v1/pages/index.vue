<script setup lang="ts">
const {data} = await useFetch('/api/posts')
</script>

<template>
  <nuxt-layout name="ntm-blog">
    {{ data }}
  </nuxt-layout>
</template>