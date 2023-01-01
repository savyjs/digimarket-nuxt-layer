<template>
  <div class="flex w-full gap-2 bg-default">
    <div class="grow w-1/3">
      <NtmProfileSideMenu :items="profileMenuItems">
        <template #topsidebar>
          <slot name="topsidebar">
            <div class="list list-timeline py-2">
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
                <div class="list-item-decoration">
                  <div class="list-item-linedot"></div>
                  <div class="list-item-dot"></div>
                </div>
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
                <div class="list-item-decoration">
                  <div class="list-item-linedot"></div>
                  <div class="list-item-dot"></div>
                </div>
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
            <div class="border-b-[1px] mx-5"></div>
          </slot>
        </template>
      </NtmProfileSideMenu>
    </div>
    <div class="grow w-2/3">
      <slot name="main">
        <NtmVerifyMessage/>
        <NtmMyOrdersSummery class="my-2"/>
        <div class="card-primary">
          <div class="card-title card-title-underline-primary flex justify-between">
            <div>
              <b>خرید های پرتکرار شما</b>
              <div class="title-decoration-underline"></div>
            </div>
          </div>
          <div class='card products-sweeper w-full'>
            <NtmSwiper :slidesPerView="5">
              <NtmSwiperSlide v-for="i in 6" class="flex">
                <div class='product-carousel gap-1 mx-1 border-l-[1px] px-4'>
                  <div class='image inline-block justify-center grow w-full flex-row py-12'>
                    <img :src='`/dkala/products/product-${(i%5)+1}.jpg`'/>
                    <div class='flex justify-between'>
                      <div>
                        <svg class='icon-small icon-small icon-gray fill-orange-600'>
                          <use href='#deliveryInPerson'/>
                        </svg>
                      </div>
                      <span class='bg-gray-200 text-gray-900 px-2 text-[11px] rounded-md'>۱</span>
                    </div>
                  </div>
                  <div class='grow'>
                    <div class='flex items-center gap-1 my-1'>
                      <div class='bg-slate-300 border border-gray-50 w-3 h-3 rounded-8p'></div>
                      <span class='text-gray-600 text-[10px]'>نوک مدادی</span>
                    </div>
                  </div>
                </div>
              </NtmSwiperSlide>
            </NtmSwiper>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup>
const {sideMenu, user, statistics, productSliders} = defineProps([
  'sideMenu', 'user', 'statistics', 'productSliders'
]);
const {profileMenuItems} = useNtm()?.options();
</script>