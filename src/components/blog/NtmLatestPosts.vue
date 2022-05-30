<template>
  <div>
    {{ props?.articles }}
  </div>
</template>

<script setup lang="ts">
// implicit (assumes $eq operator)
const props = defineProps(
    {
      articles: {type: String, required: true},
    }
)
</script>
