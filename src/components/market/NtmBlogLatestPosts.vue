<template>
  <div v-for="article in articles">
    article: {{ article.data }}
  </div>
</template>

<script setup>
// implicit (assumes $eq operator)
const {articles} = defineProps(['articles'])
</script>
