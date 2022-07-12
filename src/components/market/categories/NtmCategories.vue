<template>
  <div>
    {{ items }}
  </div>
</template>
<script setup lang="ts">
import {Categories} from "ntmRoot/schema/types/market";

const {items} = defineProps<Categories>()
</script>