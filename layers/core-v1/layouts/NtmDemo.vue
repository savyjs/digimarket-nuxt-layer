<template>
  <Html :lang="lang" :dir="dir ? 'rtl' : 'ltr'">
  <div :class="{'bg-default':true,'fixed':true,'w-full':true}">
    <div class="container mx-auto py-1">
      <div class="flex justify-between items-center">

        <div class="flex gap-3 items-center">
          <div class="flex items-center" v-if="$i18n?.availableLocales?.length > 1">
            <LangNtmSwitchLang/>
          </div>
          <div class="flex items-center">
            <ThemeNtmSwitchRTL v-if="appConfig?.rtlDictionary?.length > 1"/>
          </div>
          <div class="flex items-center">
            <ThemeNtmDarkToggle/>
          </div>
          <span v-if="version" class="text-xs self-center items-center">
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

const appConfig = useAppConfig()
let {locale} = useI18n()

let dir = useRtl()
let lang = locale

const version = appConfig?.digimarket?.version
const darkmode = useDarkmode()
const rtl = useRtl()


onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkmode.value = true;
  } else {
    darkmode.value = false;
  }

  if (appConfig?.digimarket?.messages?.[locale.value]) {
    locale.value = localStorage?.lang
  }

  rtl.value = appConfig?.digimarket?.rtlDictionary?.[locale.value] ? !!localStorage.rtl : !!appConfig?.digimarket?.rtl


  watch(lang, function (newVal) {
    localStorage.lang = newVal
  })
  watch(rtl, function (newVal) {
    localStorage.rtl = newVal
  })

})

</script>