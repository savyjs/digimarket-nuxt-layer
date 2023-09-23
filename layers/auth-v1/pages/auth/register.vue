<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-register-box @action="register"/>
  </nuxt-layout>
</template>

<script setup>

async function register(data) {
  useRegister(data)
}
</script>