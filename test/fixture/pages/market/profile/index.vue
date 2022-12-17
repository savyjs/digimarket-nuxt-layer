<template>
  <div>
    <NtmProfile
        :sideMenu="sideMenu"
        :user="userData"
        :statistics="userOrdersSummeryData"
        :productSliders="[userList,userFavourites,recommendedProducts]"
    >
      <template #topsidebar>
      </template>
    </NtmProfile>
  </div>
</template>
<script setup>
const options = useNtm()?.options();
const userData = ref();
const sideMenu = ref(options.profileMenuItems);
const userOrdersSummeryData = ref();
const userList = ref();
const userFavourites = ref();
const recommendedProducts = ref();
const customList = ref();

definePageMeta({
  layout: 'ntm-panel'
})
</script>