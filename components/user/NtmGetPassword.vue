<template>
  <input
      :type="show ? 'text' : 'password'"
      class="input-primary py-3 w-full dark:border-gray-800"
      required
  />
  <button class="btn" @click="!show">
    <font-awesome-icon icon="fa fa-eye"/>
  </button>
</template>
<script setup lang="ts">
const show = ref(false)
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>