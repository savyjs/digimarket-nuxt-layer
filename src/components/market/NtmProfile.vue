<template>
  <div class="flex w-full gap-2">
    <div class="grow w-1/3">
      <NtmProfileSideMenu :items="profileMenuItems"/>
    </div>
    <div class="grow w-2/3">
      <NtmVerifyMessage/>
      <NtmMyOrdersSummery/>
    </div>
  </div>
</template>
<script setup>
const {sideMenu, user, statistics, productSliders} = defineProps([
  'sideMenu', 'user', 'statistics', 'productSliders'
]);
const {profileMenuItems} = useNtm()?.options();
</script>