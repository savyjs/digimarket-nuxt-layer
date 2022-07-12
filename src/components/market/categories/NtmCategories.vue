<template>
  <div>
    {{ props }}
  </div>
</template>
<script setup lang="ts">
import {Categories} from "ntmRoot/schema/types/market";

const props = defineProps<Categories>()
</script>