<template>
  <v-layout>
    <v-main class="d-flex align-center justify-center" style="min-height: 600px;">
      <slot/>
    </v-main>
  </v-layout>
</template>
<script setup>
const loading = useLoader();
loading.start('skeleton')
onMounted(() => {
  loading.stop('skeleton')
})
</script>