<template>
  <div>
    <NtmLatestPosts :articles="articles"/>
  </div>
</template>
<script setup>
const articles = await queryContent('/').find()
console.log({articles})
definePageMeta({})
</script>
