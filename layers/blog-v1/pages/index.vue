<script setup lang="ts">
const {data} = await useFetch('/api/posts')
</script>

<template>
  <nuxt-layout name="ntm-blog">
    <div>
      <template v-for="item in data">
        <article>
          <blog-ntm-short-blog-post :item="item" />
        </article>
        <template>
    </div>
  </nuxt-layout>
</template>