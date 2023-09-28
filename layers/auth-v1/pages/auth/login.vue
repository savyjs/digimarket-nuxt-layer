<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-login-box @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

async function login(credential) {
  useLogin(credential)
}

</script>
