<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.params.id
const {data} = await useFetch('/api/posts/')
</script>
