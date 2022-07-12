<template>
  <NtmProduct
      v-bind="data"
  />
</template>
<script setup>
const {id} = useRoute().params;
const {data} = await useFetch(`/api/market/products/${id}`)
</script>