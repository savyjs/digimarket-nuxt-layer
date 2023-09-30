<template>
  <nuxt-layout name="vsd-auth">
    <user-vsd-strapi-logout-box @action="logout"></user-vsd-strapi-logout-box>
  </nuxt-layout>
</template>

<script setup>

definePageMeta({
  middleware: 'not-authenticated'
});

// Sending event
function login(credential) {
  useLogout()
}
</script>
