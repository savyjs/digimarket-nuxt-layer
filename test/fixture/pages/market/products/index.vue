<template>
  <div>
    <NtmProducts
        :items="products"
    />
  </div>
</template>
<script setup>
const {products, total, limit} = await $fetch(`/api/market/products`)
</script>