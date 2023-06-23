<template>
  <nuxt-layout name="ntm-panel">
    <NtmProfile
        :sideMenu="sideMenu"
        :user="userData"
        :statistics="userOrdersSummeryData"
        :productSliders="[userList,userFavourites,recommendedProducts]"
    >
      <template #topsidebar>
      </template>
      <template #main>
      </template>
    </NtmProfile>
  </nuxt-layout>
</template>
<script setup>
import NtmProfile from "~/components/market/NtmProfile.vue";

const options = useAppConfig()?.digimarket;
const userData = ref();
const sideMenu = ref(options.profileMenuItems);
const userOrdersSummeryData = ref();
const userList = ref();
const userFavourites = ref();
const recommendedProducts = ref();
const customList = ref();

</script>