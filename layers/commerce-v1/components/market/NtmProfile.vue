<template>
  <div class="flex w-full gap-2 bg-default">
    <div class="grow w-1/3">

      <!-- Profile side layout -->
      <div class="card-primary p-0">

        <slot name="topsidebar">

          <div class="list list-timeline py-2">
            <div class="list-item">
              <div class="list-item-avatar">
                <img src="~digimarket-nuxt-layer-commerce/assets/img/profile/avatar.svg"/>
              </div>
              <div class="list-item-text flex w-full justify-between">
                <div class="grow">
                  <p>{{ user?.fullName || $t('ntm.first_name',"First Name") }}</p>
                  <p class="text-gray-400">{{ user?.username || '@username' }}</p>
                </div>
                <nuxt-link class="text-link px-[23pt] flex pt-2 text-[11pt] align-center">
                    <span><svg class="icon-small fill-link" fill="currentColor"><use
                        href="#edit"/></svg></span>
                </nuxt-link>
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-decoration">
                <div class="list-item-linedot"></div>
                <div class="list-item-dot"></div>
              </div>
              <div class="list-item-text w-full">
                <div class="w-full py-5">
                  <div class="flex justify-between">
                    <span>{{ $t('ntm.assets', 'Assets') }}</span>
                    <span class="flex gap-1">250 <svg class="icon-small dark:fill-gray-200"><use
                        href="#toman"/></svg></span>
                  </div>
                  <nuxt-link class="text-link flex pt-2 text-[11pt] align-center">
                    <small>{{ $t('ntm.example_product_title', 'Example product Title') }}</small>
                    <span><svg class="icon-small fill-link" fill="currentColor"><use
                        href="#chevronLeft"/></svg></span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-decoration">
                <div class="list-item-linedot"></div>
                <div class="list-item-dot"></div>
              </div>
              <div class="list-item-text w-full">
                <div class="w-full">
                  <div class="flex justify-between">
                    <span class="grow-1">{{ $t('ntm.club','Club') }}</span>
                    <span>۲۳<small class="px-1">{{ $t("ntm.club_points",'Points') }}</small></span>
                  </div>
                  <nuxt-link class="text-link flex pt-2 text-[11pt] align-center">
                    <small>
                      {{ $t("ntm.club_awards","Awards")}}
                    </small>
                    <span><svg class="icon-small fill-link" fill="currentColor"><use
                        href="#chevronLeft"/></svg></span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b-[1px] mx-5"></div>
        </slot>


        <div class="list list-primary list-sidemenu">
          <template v-for="(item,index) in profileMenuItems">
            <nuxt-link class="list-item" :to="item?.link">
              <div v-if="item?.svg" class="list-item-icon">
                <svg class="icon w-5 h-5">
                  <use :href="`#${item.svg}`"/>
                </svg>
              </div>
              <div v-else-if="item.icon" class="list-item-icon">
                <i :class="item.icon"></i>
              </div>
              <div v-if="item.text" class="list-item-text">
                {{ $t(item.text.replaceAll(" ","_").toLowerCase(), item.text)}}
              </div>
            </nuxt-link>
            <div v-if="index+1 != profileMenuItems?.length" class="border-b-[1px] mx-5"></div>
          </template>
        </div>
      </div>

    </div>
    <div class="grow w-2/3">
      <slot name="main">
        <MarketNtmVerifyMessage/>
        <MarketNtmMyOrdersSummery class="my-2"/>
        <div class="card-primary">
          <div class="card-title card-title-underline-primary flex justify-between">
            <div>
              <b>
                {{$t("ntm.recommended_for_you","Recommended for you")}}
              </b>
              <div class="title-decoration-underline"></div>
            </div>
          </div>
          <div class='card products-sweeper w-full py-5'>
            <MarketNtmSwiper :slidesPerView="4">
              <MarketNtmSwiperSlide v-for="i in 6">
                <div class="flex">
                  <div class='product-carousel gap-1 mx-1 border-l-[1px] px-4'>
                    <div class='justify-between self-start'>
                      Special Sell Logo
                    </div>
                    <div class='image inline-block justify-center grow w-full flex py-12'>
                      <div class='justify-between self-end'>
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
                          <div class='mx-1'>۳۶,۵۰۰
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
              </MarketNtmSwiperSlide>
            </MarketNtmSwiper>
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
const profileMenuItems = sideMenu
</script>