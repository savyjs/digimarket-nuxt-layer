<template>
  <NtmCategories
      :items="categories"
  />
</template>
<script setup>
const categories = await $fetch(`/api/market/categories`)
definePageMeta({
  layout: 'ntm-market'
})
</script>