<template>
  <nuxt-layout name="ntm-auth">
    <NtmRegisterBox @next="register"/>
  </nuxt-layout>
</template>

<script setup>
import NtmRegisterBox from "~/components/user/NtmRegisterBox.vue";

async function register(data) {

}
</script>