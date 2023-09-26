<script setup lang="ts">
const {data} = await useFetch('/api/posts')
</script>

<template>
  <nuxt-layout name="ntm-blog">
    <div class="container">
      <div class="row" v-for="item in data">
        <article>
          <blog-ntm-short-blog-post :item="item"></blog-ntm-short-blog-post>
        </article>
      </div>
    </div>
  </nuxt-layout>
</template>