<template>
  <nuxt-layout name="ntm-panel">
    <MarketNtmProfile
        :sideMenu="sideMenu"
        :user="userData"
        :statistics="userOrdersSummeryData"
        :productSliders="[userList,userFavourites,recommendedProducts]"
    >
    </MarketNtmProfile>
  </nuxt-layout>
</template>

<script setup>

const options = useAppConfig()?.digimarket;

// user data includes all information for current logged-in user
const userData = useState('userData',()=>{});

const sideMenu = ref(options.profileMenuItems);

// this data should be fetched from API
const userOrdersSummeryData = ref();
const userList = ref();
const userFavourites = ref();
const recommendedProducts = ref();


</script>