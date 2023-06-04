<template>
  <div>
    <span class="btn btn-primary mx-2">
      <button @click="locale = 'en'">English</button>
    </span>
    <span class="btn btn-primary mx-2">
      <button @click="locale = 'fa'">فارسی</button>
    </span>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

let {locale} = useI18n()
</script>