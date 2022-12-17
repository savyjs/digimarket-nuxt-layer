<template>
  <div class="flex w-full gap-2">
    <div class="grow w-1/3">
      <NtmProfileSideMenu :items="profileMenuItems">
        <template #topsidebar>
          <slot name="topsidebar">
            <div class="list list-timeline">
              <div class="list-item">
                <div class="list-item-avatar">
                  <img src="@ntmRoot/assets/img/profile/avatar.svg"/>
                </div>
                <div class="list-item-text">
                  <div>
                    <p>{{ user?.fullName || 'کاربر' }}</p>
                    <p class="text-gray-400">{{ user?.username || '@username' }}</p>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="list-item-text">
                  <div>
                    <div class="flex full">
                      <span class="grow-1">کیف پول</span>
                      <span>0 تومان</span>
                    </div>
                    <p class="text-gray-400">{{ user?.username || '@username' }}</p>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="list-item-text">
                  <div>
                    <div class="flex full">
                      <span class="grow-1">کیف پول</span>
                      <span>0 تومان</span>
                    </div>
                    <p class="text-gray-400">{{ user?.username || '@username' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </template>
      </NtmProfileSideMenu>
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