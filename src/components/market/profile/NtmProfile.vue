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
<script script>
const {profileMenuItems} = useNtm()?.options();
</script>