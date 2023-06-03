<template>
  <div>
    <span class="btn btn-primary mx-2">
      <button @click="switchLocalePath('en')">English</button>
    </span>
    <span class="btn btn-primary mx-2">
      <button @click="switchLocalePath('fa')">فارسی</button>
    </span>
  </div>
</template>
<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>