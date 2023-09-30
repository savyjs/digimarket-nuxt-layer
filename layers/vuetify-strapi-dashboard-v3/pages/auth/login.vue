<template>
  <nuxt-layout name="vsd-auth">
    <user-vsd-strapi-login-box @action="login"></user-vsd-strapi-login-box>
  </nuxt-layout>
</template>

<script setup>

definePageMeta({
  middleware: 'not-authenticated'
});

// Sending event
function login(credential) {
  useLogin(credential)
}
</script>
