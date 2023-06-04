<template>
  <div class="absolute">
    <div class="flex">
      <select v-model="locale" class="input">
        <option selected value="en">En</option>
        <option value="fa">فا</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

let {locale} = useI18n()
</script>