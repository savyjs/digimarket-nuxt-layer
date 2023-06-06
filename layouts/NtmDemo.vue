<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-between">
        <span>{{ $t('demo_warning', 'This is a demo! for document go to ') }} <a href="https://digimarket.savyjs.com">digimarket documents</a></span>
        <span>
        <span>
          <LangNtmSwitchLang/>
          <
        </span>
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