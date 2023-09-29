<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-forgot-box @action="forgot"></user-ntm-strapi-forgot-box>
  </nuxt-layout>
</template>

<script setup>
// Sending event
async function forgot(credential) {
  useForgot(credential)
}

</script>
