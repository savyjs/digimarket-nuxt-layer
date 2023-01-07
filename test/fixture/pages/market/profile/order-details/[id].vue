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
      <div class="card card-primary px-0">
        <div class="card-title px-3 py-2 card-title-underline-primary flex justify-start gap-2">
          <nuxt-link to="/market/profile/orders">
            <svg class="icon-medium fill-gray-600 dark:fill-gray-200 dark:text-gray-200">
              <use href="#arrowRight"/>
            </svg>
          </nuxt-link>
          <b>جزئیات سفارش</b>
        </div>
        <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
        <div class="card-body ">
          <div class="flex justify-between payment-block text-[80%] py-3 px-3">
            <p class="self-center text-gray-600 dark:text-gray-200"> در صورت تمایل می توانید اینترنتی پرداخت کنید</p>
            <button class="btn-primary-outlined">
              پرداخت
            </button>
          </div>
          <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
          <div class="order-details w-full flex gap-3 text-sm px-3 py-4">
            <div class="flex gap-2">
              <span class="text-gray-400 dark:text-gray-200">کد پیگیری سفارش</span>
              <span class="text-gray-700 dark:text-gray-100">
                <b>
                343545487
                </b>
              </span>
            </div>
            <svg class="self-center icon-small fill-gray-300 dark:fill-gray-200">
              <use href="#dotOutline"/>
            </svg>
            <div class="flex gap-2">
              <span class="text-gray-400 dark:text-gray-200">تاریخ ثبت سفارش</span>
              <span class="text-gray-700 dark:text-gray-100">
                <b>
                16 دی 1401
                </b>
              </span>
            </div>
          </div>
          <div class="w-full h-1 border-b-[1px] border-gray-200"></div>

          <div class="order-address w-full flex gap-3 text-sm px-3 py-4">
            <div class="flex gap-2">
              <span class="text-gray-400 dark:text-gray-200">تحویل گیرنده</span>
              <span class="text-gray-700 dark:text-gray-100">
                <b>
                343545487
                </b>
              </span>
            </div>
            <svg class="self-center icon-small fill-gray-300 dark:fill-gray-200">
              <use href="#dotOutline"/>
            </svg>
            <div class="flex gap-2">
              <span class="text-gray-400 dark:text-gray-200">شماره موبایل</span>
              <span class="text-gray-700 dark:text-gray-100">
                <b>
                16 دی 1401
                </b>
              </span>
            </div>

          </div>

          <div class="order-address w-full flex gap-3 text-sm px-3 py-4">
            <div class="flex gap-2 gorw">
              <span class="text-gray-400 dark:text-gray-200">آدرس</span>
              <span class="text-gray-700 dark:text-gray-100">
              <b>  شهران جنوبی، بلوار مرادی شمالی - کوچه حسینی - نبش سوپر مارکت - پلاک 58 - واحد 1 - تلفن منزل: 0234556</b>
              </span>
            </div>
            <div class="flex gap-2">
              <nuxt-link>
                <button class="text-link flex gap-2">
                  <svg class="icon-small">
                    <use href="#edit"/>
                  </svg>
                  تغییر آدرس و زمان تحویل
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="w-full h-1 border-b-[1px] border-gray-200"></div>
          <div class="order-price flex gap-2 px-3 py-3 text-sm">
            <div class="flex dark:text-gray-200 text-gray-400 gap-2">مبلغ
              <b class="dark:text-gray-100 text-gray-800"> ۴۵۶.۰۰۰</b>
              <svg class="mx-1 icon-small dark:fill-gray-200">
                <use href="#toman"/>
              </svg>
            </div>
            <svg class="self-center icon-small fill-gray-300 dark:fill-gray-200">
              <use href="#dotOutline"/>
            </svg>
            <b class="dark:text-gray-100 text-gray-800">پرداخت در محل (با کارت بانکی)</b>
          </div>
          <div class="flex gap-2 text-sm text-gray-500 dark:text-gray-200 px-3">
              <span>
                <img src='@ntmRoot/public/dkala/club-point.svg' class='w-4'/>
              </span>
            <span>امتیاز کلاب</span>
            <b class="text-gray-800 dark:text-gray-100">۱۸</b>
          </div>
          <div class="w-full h-1 my-4 border-b-[1px] border-gray-200"></div>
          <div class="p-3">
            <div class="card-primary order-2 px-0 my-2">
              <div class="card-body p-4">
                <div class="w-full">
                  <div class="top-box w-full flex gap-3 text-sm">
                    <div class="right-box grow">
                      <div class="flex gap-2">
              <span class="text-gray-800 dark:text-gray-200">
                مرسوله ۱ از ۱
              </span>
                        <svg class="self-center icon-small fill-gray-200 dark:fill-gray-200">
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
زمان تحویل
                <b class="text-gray-900 dark:text-gray-100">پنج‌شنبه ۲۲ دی بازه ۹ - ۱۵</b>
                  </span>
                      </div>
                      <div class="my-5 flex gap-2 fill-gray-400 align-middle dark:text-gray-200 text-gray-500 text-sm">
                        <span>هزینه ارسال <b class="text-gray-800 dark:text-gray-100">رایگان!</b></span>
                        <svg class="self-center icon-small fill-gray-100 dark:fill-gray-500">
                          <use href="#dotOutline"/>
                        </svg>
                        <div class="flex gap-2">
                          مبلغ مرسوله
                          <b class="text-gray-900 dark:text-gray-100">۸۵۶.۰۰۰</b>
                          <svg class="mx-1 icon-small fill-gray-900 dark:fill-gray-100">
                            <use href="#toman"/>
                          </svg>
                        </div>
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
                        <div class="flex gap-2 my-5 text-gray-600 dark:text-gray-200">
                          کد پیگیری مرسوله
                          <b class="text-gray-800 dark:text-gray-100">۳۴۳۴۳۴۵۲</b>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="grow h-1 border-b-[1px] border-gray-100"></div>
                  <div class="w-full flex gap-2 my-3">
                    <nuxt-link to="#">
                      <div class='product-box-primary py-2 my-2'>
                        <div class='flex'>
                          <div class='w-36 max-h-6'>
                            <NuxtLink to='/product/1'>
                              <img src='/dkala/products/product-2.jpg'/>
                            </NuxtLink>
                            <div class='counter-box-container flex justify-end'>
                              <div class='mx-3 text-xs'>
                                ۲
                              </div>
                            </div>
                          </div>
                          <div class='grow'>
                            <div class='title'>
                              <h3 class='text-sm font-bold'>
                                قهوه فوری گلد نسکافه - 190 گرم
                              </h3>
                            </div>
                            <div class='attributes'>
                              <div class='flex my-1'>
            <span class='mx-1'>
              <div class='bg-yellow-300 border border-gray-50 w-4 h-4 rounded-full '></div>
            </span>
                                <span>طلایی</span>
                              </div>
                              <div class='flex my-1'>
            <span class='mx-1'>
              <div>
                <svg class='icon-gray  icon-small'>
                   <use href="#guarantee"/>
                </svg>
              </div>
            </span>
                                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                              </div>
                              <div class='flex my-1'>
            <span class='mx-1'>
              <div>
                <svg class='icon-gray icon-small' fill='#444'>
                  <use href="#seller"/>
                </svg>
              </div>
            </span>
                                <span>فروشگاه آسمان کوچک</span>
                              </div>
                              <div class='prices'>
                                <div class='py-3 flex'>
                                  <span class='font-bold text-lg'>۱۸۱،۰۰۰</span>
                                  <span>
              <svg class='icon-gray w-6 h-5 mx-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'>
                <path
                    id='toman'
                    fillRule='evenodd'
                    d='M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z'
                    clipRule='evenodd'>
              </path>
              </svg>
            </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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