<template>
  <div>
    {{ item }}
  </div>
</template>
<script setup lang="ts">
import {Product} from "@ntmRoot/schema/types/market";

const item = defineProps<Product>()
</script>