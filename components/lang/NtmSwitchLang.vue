<template>
  <div>
    <div class="flex">
      <select v-model="locale" class="list bg-transparent text-white">
        <option class="bg-gray-700" selected value="en">En</option>
        <option class="bg-gray-700" value="fa">فا</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

let {locale} = useI18n()
</script>