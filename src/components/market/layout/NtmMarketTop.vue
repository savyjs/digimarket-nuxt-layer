<template>
  <header class="relative rtl container-4xl-w z-[3] flex w-full bg-white px-3 pt-4 pb-1">
    <div class="flex-auto">
      <div class="flex w-full items-center">
        <a href="/" class="ml-5 shrink-0">
          <img width="100" height="30" :src="logo" :alt="title"/>
        </a>
        <NtmSearchModal/>
      </div>
    </div>

    <div class="mr-auto flex-auto grow-0">
      <div class="flex items-center text-[11px]">
        <div class="rounded-xl flex-auto cursor-pointer border border-gray-200 py-2.5 px-4">
          <nuxt-link to="/login">
            <a class="flex justify-around align-baseline gap-3">
              <svg class="h-5 w-5" fill="currentColor">
                <use href="#registerationSignIn"></use>
              </svg>
              <span class="text-neutral-800 text-bold font-bold text-[12px]"> ورود | ثبت‌نام</span>
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
const {logo, title} = useNtm().options();

</script>
