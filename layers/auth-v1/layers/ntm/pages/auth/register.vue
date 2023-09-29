<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-register-box  @action="register"></user-ntm-strapi-register-box>
  </nuxt-layout>
</template>

<script setup>
// Sending event
async function register(data) {
  useRegister(data)
}
</script>