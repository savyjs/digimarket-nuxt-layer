<template>
  <nuxt-layout name="vsd-auth">
    <user-vsd-strapi-login-box @action="login"/>
  </nuxt-layout>
</template>

<script setup>
// Sending event
async function login(credential) {
  useLogin(credential)
}
</script>
