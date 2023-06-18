<template>
  <Html :lang="lang" :dir="dir ? 'rtl' : 'ltr'">
  <div :class="{'bg-dark':darkmode,'text-white':darkmode,'fixed':true,'w-full':true}">
    <div class="container mx-auto py-1">
      <div class="flex justify-between items-center">
        <p class="flex max-md:hidden items-center">
          {{ $t('demo_warning', 'Hello! This site is demo for digimarket kit. for documentation please go to ') }}
          <nuxt-link class="sm mx-1 font-light" target="_blank" href="https://digimarket.savyjs.com">
            digimarket.savyjs.com
          </nuxt-link>
          , or for the list of available pages visit
          <nuxt-link class="sm mx-1 font-light" target="_blank" to="/">main page.</nuxt-link>
        </p>
        <div class="md:hidden items-center">
          <nuxt-link class="sm mx-1 font-light" target="_blank" href="https://digimarket.savyjs.com">
            digimarket.savyjs.com
          </nuxt-link>
        </div>

        <div class="flex gap-3 items-center">
          <div>
            <LangNtmSwitchLang/>
          </div>
          <div>
            <ThemeNtmSwitchRTL/>
          </div>
          <div>
            <ThemeNtmDarkToggle/>
          </div>
          <span class="text-xs self-center items-center">
          Version {{ version }}
        </span>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-12">
    <slot/>
  </div>
  </Html>
</template>
<script setup>

import {useI18n} from "vue-i18n";

let {locale} = useI18n()

let dir = useRtl()
let lang = locale


const darkmode = useDarkmode()
const rtl = useRtl()
const version = 1


onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkmode.value = true;
  } else {
    darkmode.value = false;
  }

  rtl.value = !!localStorage.rtl
  locale.value = localStorage.lang


  watch(lang, function (newVal) {
    localStorage.lang = newVal
  })
  watch(rtl, function (newVal) {
    localStorage.rtl = newVal
  })

})

</script>