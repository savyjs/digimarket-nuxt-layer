<template>
  <div>
    <NtmCategory
        :items="products"
    />
  </div>
</template>
<script setup>
const {id} = useRoute().params;
const {products, total, limit, skip} = await $fetch(`/api/market/categories/${id}`)
</script>