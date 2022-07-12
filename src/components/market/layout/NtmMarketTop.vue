<template>
  <header class="pos-relative container-4xl-w z-[3] flex w-full bg-white px-3 pt-4 pb-1">
    <div class="flex-auto">
      <div class="flex w-full items-center">
        <a href="/" class="ml-5 shrink-0">
          <img width="100" height="30" :src="logo" :alt="title"/>
        </a>
        <div class="ml-auto h-10 flex-auto grow">
          <div
              id="search-box"
              class="px-4-lg text-body-2 rounded-8p flex h-10 items-center md:w-3/4 xl:w-2/3">

          <span class="pr-2 pl-3 text-[13px] text-gray-400">
            <i class="fa fa-search"></i>
                  </span>
            <span class="cursor-text text-[12px] text-gray-400">
                    جستجو
                  </span>

            <div id="backdrop-searchModal"></div>
            <div
                id="overlay-searchModal"
                class="relative h-full w-full md:h-auto"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mr-auto flex-auto grow-0">
      <div class="flex items-center text-[11px]">
        <div class="rounded-8p flex-auto cursor-pointer border border-gray-200 py-1 px-2">
          <nuxt-link to="/login">
            <a class="">
              <svg class="h-5 w-5" fill="currentColor">
                <use href="#registerationSignIn"></use>
              </svg>
              <span class="text-neutral-800"> ورود | ثبت‌نام</span>
            </a>
          </nuxt-link>
        </div>
        <span class="d-none d-block-lg mx-3 w-px bg-neutral-200 py-3 "></span>
        <div class="flex items-center text-neutral-500">
          <nuxt-link to="/checkout/cart">
            <a class="shrink-0">
              <svg class="h-5 w-5" fill="currentColor">
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
