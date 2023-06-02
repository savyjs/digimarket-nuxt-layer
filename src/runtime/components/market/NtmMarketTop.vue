<template>
  <header class="relative rtl container-4xl-w z-[3] flex w-full bg-default px-3 pt-4 pb-1">
    <div class="flex-auto">
      <div class="flex w-full items-center">
        <a href="/" class="ml-5 shrink-0">
          <img width="100" height="30" :src="logo" :alt="title"/>
        </a>
        <NtmSearchModal/>
      </div>
    </div>
    <div class="mr-auto flex-auto grow-0">
      <div class="flex items-center gap-1 text-[11px]">
        <span class="mx-2 self-center">
          <button @click="toggleDarkmode()" class="py-1 px-4 border-[1px] rounded-full border-gray-400 dark:border-gray-200">
            <svg class="icon icon-small dark:fill-gray-200" xmlns="http://www.w3.org/2000/svg"
                 aria-hidden="true" focusable="false" viewBox="0 0 24 24">
          <path v-if="darkmode"
                d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
        <template v-else>
              <path
                  d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path
            d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path
            d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path
            d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path
            d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path
            d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path
            d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path
            d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path
            d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
        </template>
          </svg>
        </button>
        </span>
        <div class="rounded-xl flex-auto cursor-pointer border border-gray-200 py-2.5 px-4">
          <nuxt-link :to="{name:'NtmLogin'}" no-rel external>
            <a class="flex justify-around align-baseline gap-3">
              <svg class="h-5 w-5 dark:text-gray-200" fill="currentColor">
                <use href="#registerationSignIn"></use>
              </svg>
              <span class="text-neutral-800 text-bold font-bold text-[12px] dark:text-white"> ورود | ثبت‌نام</span>
            </a>
          </nuxt-link>
        </div>
        <span class="d-none d-block-lg mx-3 w-px bg-neutral-200 py-3"></span>
        <div class="flex items-center text-neutral-500">
          <nuxt-link to="/checkout/cart">
            <a class="shrink-0">
              <svg style="width: 24px; height: 24px; fill: var(--color-icon-high-emphasis);">
                <use href="#cartOff"></use>
              </svg>
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const {logo, title} = useNtm()?.options();
let darkmode = useDarkmode()

function toggleDarkmode() {
  darkmode.value = !darkmode.value
}
</script>
