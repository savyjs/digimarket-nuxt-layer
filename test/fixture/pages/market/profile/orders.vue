<template>
  <NtmProfile
      :sideMenu="sideMenu"
      :user="userData"
      :statistics="userOrdersSummeryData"
      :productSliders="[userList,userFavourites,recommendedProducts]"
  >
    <template #topsidebar>
    </template>
    <template #main>
      <div class="card card-primary">
        <div class="card-title card-title-underline-primary flex justify-between">
          <div>
            <b>تاریخچه سفارشات</b>
            <button class="btn42" >test</button>
            <div class="title-decoration-underline"></div>
          </div>
          <div>
            <button>
              <svg class="icon-medium fill-gray-500 dark:fill-gray-200 dark:text-gray-200">
                <use href="#searchSearch"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <LazyNuxtPage />
        </div>
      </div>
    </template>
  </NtmProfile>
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
</script>