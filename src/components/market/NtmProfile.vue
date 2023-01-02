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
            <NtmSwiper :slidesPerView="4">
              <NtmSwiperSlide v-for="i in 6">
                <div class="flex">
                  <div class='product-carousel gap-1 mx-1 border-l-[1px] px-4'>
                    <div class='image inline-block justify-center grow w-full flex py-12'>
                      <div class='justify-between self-end h-full'>
                        <svg class='icon-medium fill-orange-600 rounded-full border-red-700 border-[1px]'>
                          <use href='#addSimple'/>
                        </svg>
                      </div>
                      <img :src='`/dkala/products/product-${(i%5)+1}.jpg`'/>
                    </div>
                    <div class='text-[8pt]'>
                      <b>قهوه فوری گلد نسکافه - 190 گرم</b>
                    </div>
                    <div class='grow my-4'>
                      <div class='flex items-center gap-1 my-1'>
                        <small class='text-primary text-[10px]'>تنها یک عدد در انبار باقی مانده</small>
                      </div>
                      <div class='flex items-center gap-1 my-1'>
                        <svg class="icon-small icon-gray fill-purple-600">
                          <use href="#deliveryJet"/>
                        </svg>
                        <b class='text-gray-600 text-[10px]'>ارسال امروز ویژه دیجی‌پلاس</b>
                      </div>
                    </div>
                    <div>
                      <div class='font-bold text-[15px] flex justify-between'>
                        <div class="bg-primary text-white px-3 h-5 flex text-[8pt] rounded-full">
                          <span class="self-center">۶%</span>
                        </div>
                        <div class="flex">
                          <div class='mx-1 ltr'>۳۶,۵۰۰
                            <p class="text-gray-400 text-[80%] font-light line-through">۳۹,۵۰۰</p>
                          </div>
                          <div class=''>
                            <svg class='icon-gray icon-small'>
                              <use href='#toman'/>
                            </svg>
                          </div>

                        </div>
                      </div>
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