<template>
  <nuxt-layout name="vsd-auth">
    <user-vsd-strapi-forgot-box @action="forgot"></user-vsd-strapi-forgot-box>
  </nuxt-layout>
</template>

<script setup>

definePageMeta({
  middleware: 'not-authenticated'
});

// Sending event
function forgot(credential) {
  useForgot(credential)
}
</script>
