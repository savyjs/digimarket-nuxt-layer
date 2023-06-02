<template>
  <div>
    <span class="btn btn-primary mx-2"><NuxtLink :to="switchLocalePath('en')">English</NuxtLink></span>
    <span class="btn btn-primary mx-2"><NuxtLink :to="switchLocalePath('fa')">فارسی</NuxtLink></span>
  </div>
</template>
<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>