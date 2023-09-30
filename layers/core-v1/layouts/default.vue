<template>
  <Html :lang="lang" :dir="dir">
  <slot/>
  </Html>
</template>
<script setup>

import {useI18n} from "vue-i18n";

let {locale} = useI18n()
const dir = useRtl().value ? 'rtl' : 'ltr'
const lang = locale.value

</script>