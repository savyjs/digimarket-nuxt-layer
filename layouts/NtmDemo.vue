<template>
  <div>
    <div class="container">
      <div class="flex justify-between">
        <span>{{ $t('demo_warning', 'This is a demo! for document go to ') }} <a href="https://digimarket.savyjs.com">digimarket documents</a></span>
        <span>
        <LangNtmSwitchLang/>
      </span>
      </div>
    </div>
    <slot/>
  </div>
</template>
<script setup>

const darkmode = useDarkmode()
const rtl = useRtl()

</script>