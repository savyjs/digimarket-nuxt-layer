<template>
  <div>
    <NtmProfile
        :sideMenu="sideMenu"
        :user="userData"
        :statistics="userOrdersSummeryData"
        :productSliders="[userList,userFavourites,recommendedProducts]"
    />
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig().ntm;
const userData = ref();
const sideMenu = ref(runtimeConfig.profileMenuItems);
const userOrdersSummeryData = ref();
const userList = ref();
const userFavourites = ref();
const recommendedProducts = ref();
const customList = ref();

definePageMeta({
  layout: 'ntm-panel'
})
</script>