<template>
  <div>
    <div class='mb-4 border-b border-gray-200 dark:border-gray-700'>
      <ul class='flex flex-auto -mb-px tabs-primary' id='myTab' data-tabs-toggle='#tabs' role='tablist'>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders">
            <button
                class='active'
                id='cart-tab'
                data-tabs-target='#in_progress'
                type='button'
                role='tab'
                aria-controls='in_progress'
                aria-selected='true'>جاری
              <span
                  class='badge-primary mr-2'>۵</span>
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/delivered">
            <button
                id='cart-tab'
                data-tabs-target='#delivered'
                type='button'
                role='tab'
                aria-controls='delivered'
                aria-selected='false'>تحویل شده
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/returned">
            <button
                id='cart-tab'
                data-tabs-target='#returned'
                type='button'
                role='tab'
                aria-controls='returned'
                aria-selected='false'>مرجوع شده
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/cancelled">
            <button
                id='cart-tab'
                data-tabs-target='#cancelled'
                type='button'
                role='tab'
                aria-controls='cancelled'
                aria-selected='false'>لغو شده
            </button>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id='tabs'>
      <div id='in_progress'
           role='tabpanel' aria-labelledby='cart-tab'>
        <NuxtLink to="/market/profile/order-details/1">
          <div class="card-primary order-1 px-0 my-1">
            <div class="card-title w-full px-2">
              <div class="flex justify-between ">
                <div class="flex gap-1">
                  <svg class="icon-small fill-gray-800 dark:fill-gray-200"
                       style="width: 24px; height: 24px; fill: var(--color-icon-success);">
                    <use href="#packageInProgress"/>
                  </svg>
                  <b>آماده سازی سفارش</b>
                </div>
                <span>
              <svg class="icon-medium  fill-gray-500 dark:fill-gray-200">
                <use href="#chevronLeft"/>
              </svg>
            </span>
              </div>
              <div class="my-5 flex gap-2 fill-gray-400 align-middle dark:text-gray-200 text-gray-500 text-[70%]">
                <span>۱۶ دی ۱۴۰۱</span>
                <svg class="self-center icon-small">
                  <use href="#dotOutline"/>
                </svg>
                <span>کدسفارش <b>۵۴۹۲۸۴۵</b></span>
                <svg class="self-center icon-small">
                  <use href="#dotOutline"/>
                </svg>
                <div class="flex">مبلغ ۴۵۶.۰۰۰
                  <svg class="mx-1 icon-small">
                    <use href="#toman"/>
                  </svg>
                </div>
              </div>
              <div class="flex gap-2 text-[75%] text-gray-500 dark:text-gray-200">
              <span>
                <img src='/public/dkala/club-point.svg' class='w-4'/>
              </span>
                <span>امتیاز کلاب</span>
                <b class="text-gray-800 dark:text-gray-100">۱۸</b>
              </div>
            </div>
            <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
            <div class="card-body p-4">
              <div class="w-full">
                <div class="top-box w-full flex gap-3 text-[80%]">
                  <div class="right-box grow">
                    <div class="flex gap-2">
              <span class="text-gray-800 dark:text-gray-200">
                مرسوله ۱ از ۱
              </span>
                      <svg class="self-center icon-small fill-gray-500 dark:fill-gray-200">
                        <use href="#dotOutline"/>
                      </svg>
                      <div class="flex gap-1">
                        <svg class="icon-small icon-primary">
                          <use href="#deliveryExpress"/>
                        </svg>
                        <b class="text-primary">ارسال کالاهای بزرگ و سنگین</b>
                      </div>
                    </div>
                    <div class="flex gap-2 my-3">
                  <span class="text-gray-500 dark:text-gray-200">
                تحویل
                <b class="text-gray-900 dark:text-gray-100">پنج‌شنبه ۲۲ دی بازه ۹ - ۱۵</b>
                  </span>
                    </div>

                  </div>
                  <div class="left-box justify-end ">
                    <div class="flex gap-3">
                      <span class="text-success">آماده‌سازی سفارش</span>
                      <span class="text-gray-600 dark:text-gray-200">
                    مرحله‌ی بعد:
                    <b class="text-gray-900 dark:text-gray-100">پردازش شده</b>
                  </span>
                    </div>
                    <div class="my-2">
                      <div class="w-full rounded bg-gray-200 h-2">
                        <div class="w-[50%] rounded bg-success h-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full flex gap-2 my-3">
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-1.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-2.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-3.jpg`'/>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/market/profile/order-details/2">
          <div class="card-primary order-2 px-0 my-2">
            <div class="card-title w-full px-2">
              <div class="flex justify-between ">
                <div class="flex gap-1">
                  <svg class="icon-small fill-gray-800 dark:fill-gray-200"
                       style="width: 24px; height: 24px; fill: var(--color-icon-success);">
                    <use href="#packageInProgress"/>
                  </svg>
                  <b>آماده سازی سفارش</b>
                </div>
                <span>
              <svg class="icon-medium fill-gray-500 dark:fill-gray-200">
                <use href="#chevronLeft"/>
              </svg>
            </span>
              </div>
              <div class="my-5 flex gap-2 fill-gray-400 align-middle dark:text-gray-200 text-gray-500 text-[70%]">
                <span>۱۷ دی ۱۴۰۱</span>
                <svg class="self-center icon-small">
                  <use href="#dotOutline"/>
                </svg>
                <span>کدسفارش <b>۵۴۹۲۸۴۶</b></span>
                <svg class="self-center icon-small">
                  <use href="#dotOutline"/>
                </svg>
                <div class="flex">مبلغ ۸۵۶.۰۰۰
                  <svg class="mx-1 icon-small">
                    <use href="#toman"/>
                  </svg>
                </div>
              </div>
              <div class="flex gap-2 text-[75%] text-gray-500 dark:text-gray-200">
              <span>
                <img src='/public/dkala/club-point.svg' class='w-4'/>
              </span>
                <span>امتیاز کلاب</span>
                <b class="text-gray-800 dark:text-gray-100">۱۸</b>
              </div>
            </div>
            <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
            <div class="card-body p-4">
              <div class="w-full">
                <div class="top-box w-full flex gap-3 text-[80%]">
                  <div class="right-box grow">
                    <div class="flex gap-2">
              <span class="text-gray-800 dark:text-gray-200">
                مرسوله ۱ از ۲
              </span>
                      <svg class="self-center icon-small fill-gray-500 dark:fill-gray-200">
                        <use href="#dotOutline"/>
                      </svg>
                      <div class="flex gap-1">
                        <svg class="icon-small icon-primary">
                          <use href="#deliveryExpress"/>
                        </svg>
                        <b class="text-primary">ارسال کالاهای بزرگ و سنگین</b>
                      </div>
                    </div>
                    <div class="flex gap-2 my-3">
                  <span class="text-gray-500 dark:text-gray-200">
                تحویل
                <b class="text-gray-900 dark:text-gray-100">پنج‌شنبه ۲۲ دی بازه ۹ - ۱۵</b>
                  </span>
                    </div>

                  </div>
                  <div class="left-box justify-end ">
                    <div class="flex gap-3">
                      <span class="text-success">آماده‌سازی سفارش</span>
                      <span class="text-gray-600 dark:text-gray-200">
                    مرحله‌ی بعد:
                    <b class="text-gray-900 dark:text-gray-100">پردازش شده</b>
                  </span>
                    </div>
                    <div class="my-2">
                      <div class="w-full rounded bg-gray-200 h-2">
                        <div class="w-[50%] rounded bg-success h-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full flex gap-2 my-3">
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-1.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-2.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-3.jpg`'/>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
            <div class="card-body p-4">
              <div class="w-full">
                <div class="top-box w-full flex gap-3 text-[80%]">
                  <div class="right-box grow">
                    <div class="flex gap-2">
              <span class="text-gray-800 dark:text-gray-200">
                مرسوله ۲ از ۲
              </span>
                      <svg class="self-center icon-small fill-gray-500 dark:fill-gray-200">
                        <use href="#dotOutline"/>
                      </svg>
                      <div class="flex gap-1">
                        <svg class="icon-small icon-primary">
                          <use href="#deliveryExpress"/>
                        </svg>
                        <b class="text-primary">ارسال کالاهای بزرگ و سنگین</b>
                      </div>
                    </div>
                    <div class="flex gap-2 my-3">
                  <span class="text-gray-500 dark:text-gray-200">
                تحویل
                <b class="text-gray-900 dark:text-gray-100">شنبه ۲۴ دی بازه ۹ - ۱۵</b>
                  </span>
                    </div>

                  </div>
                  <div class="left-box justify-end ">
                    <div class="flex gap-3">
                      <span class="text-success">آماده‌سازی سفارش</span>
                      <span class="text-gray-600 dark:text-gray-200">
                    مرحله‌ی بعد:
                    <b class="text-gray-900 dark:text-gray-100">پردازش شده</b>
                  </span>
                    </div>
                    <div class="my-2">
                      <div class="w-full rounded bg-gray-200 h-2">
                        <div class="w-[50%] rounded bg-success h-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full flex gap-2 my-3">
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-4.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-5.jpg`'/>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="">
                      <img class="max-h-24 max-w-24 p-4" :src='`/dkala/products/product-6.jpg`'/>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>