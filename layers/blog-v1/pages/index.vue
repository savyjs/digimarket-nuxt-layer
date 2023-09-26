<script setup lang="ts">
const { data } = await useFetch('/api/posts')
</script>

<template>
  <pre>{{ data }}</pre>
</template>