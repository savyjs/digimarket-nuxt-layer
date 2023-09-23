<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-login-box-email-password @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

async function login(credential) {
  useLogin(credential)
}

</script>
