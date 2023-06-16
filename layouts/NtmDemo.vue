<template>
  <Html :lang="lang" :dir="dir ? 'rtl' : 'ltr'">
  <div :class="{'bg-teal-900':true,'fixed':true,'w-full':true}">
    <div class="container mx-auto py-1 ">
      <div class="flex justify-between">
        <p class="text-white flex max-md:hidden">
          {{ $t('demo_warning', 'Hello! This site is demo for digimarket kit. for documentation please go to ') }}
          <nuxt-link class="sm mx-1 text-blue-100 font-light" target="_blank" href="https://digimarket.savyjs.com">
            digimarket.savyjs.com
          </nuxt-link>
          , or for the list of available pages visit
          <nuxt-link class="sm mx-1 text-blue-100 font-light" target="_blank" to="/">main page.</nuxt-link>
        </p>
        <div class="md:hidden">
          <nuxt-link class="sm mx-1 text-blue-100 font-light" target="_blank" href="https://digimarket.savyjs.com">
            digimarket.savyjs.com
          </nuxt-link>
        </div>

        <div class="flex gap-3">
          <div>
            <LangNtmSwitchLang/>
          </div>
          <div>
            <ThemeNtmSwitchRTL/>
          </div>
          <div>
            <ThemeNtmDarkToggle/>
          </div>
          <span class="text-xs text-gray-100 self-center">
          Version {{ version }}
        </span>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-8">
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