<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-forgot-box @action="forgot" mobile=""/>
  </nuxt-layout>
</template>
<script setup>


async function forgot(credential) {
  useForgot(credential)
}

</script>
