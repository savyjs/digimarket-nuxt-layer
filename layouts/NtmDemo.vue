<template>
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
    <slot/>
  </div>
</template>
<script setup>

const darkmode = useDarkmode()
const rtl = useRtl()
const version = 1
</script>