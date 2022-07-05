<template>
  <div class="">
    <section class="w-full">
      <NtmSlider/>
    </section>
    <div class="container mx-auto block">
      <section class="w-full">
        <NtmBranchs/>
      </section>
      <section class="w-full">
        <NtmIncredible/>
      </section>
      <section>
        <NtmBanners/>
      </section>
      <section>
        <NtmCategories/>
      </section>
    </div>
  </div>
</template>
<script setup>
const ntm = useNtm();
definePageMeta({
  title: 'nuxt 3 tailwind marketplace theme',
  layout: 'ntm-market'
})
</script>
