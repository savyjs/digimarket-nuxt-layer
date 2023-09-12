<template>
  <div>
    <div class="flex">
      <select v-model="rtl" class="btn py-1 dark:text-white">
        <option class="bg-gray-700" selected :value="true">RTL</option>
        <option class="bg-gray-700" :value="false">LTR</option>
      </select>
    </div>
  </div>
</template>

<script setup>
let rtl = useRtl()
</script>