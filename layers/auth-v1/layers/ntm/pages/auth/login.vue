<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-login-box @action="login"/>
  </nuxt-layout>
</template>

<script setup>
// Sending event
async function login(credential) {
  useLogin(credential)
}

</script>
