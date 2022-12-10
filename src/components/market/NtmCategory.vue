<template>
  <div>
   <NtmProducts :items="items" />
  </div>
</template>

<script setup lang="ts">
import {Products} from "@ntmRoot/schema/types/market";

const {items} = defineProps<Products>()
</script>