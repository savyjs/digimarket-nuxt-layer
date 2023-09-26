<template>
  <div>
    {{ props?.item }}
  </div>
</template>
<script setup>
const props = defineProps(['item']);
</script>