<template>
  <div>
    {{ articles }}
  </div>
</template>

<script setup>
// implicit (assumes $eq operator)
const articles = await $content('articles').fetch()
</script>
