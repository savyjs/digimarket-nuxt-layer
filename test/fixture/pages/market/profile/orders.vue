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
            <div class="title-decoration-underline"></div>
          </div>
          <div>
            <button>
              <svg class="icon-medium">
                <use href="#searchSearch"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <NuxtPage />
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

definePageMeta({
  layout: 'ntm-panel'
})
</script>