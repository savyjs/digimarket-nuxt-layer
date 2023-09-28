<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-verify-box @action="verify"/>
  </nuxt-layout>
</template>
<script setup>


async function verify(credential) {
  useVerify(credential).resend()
}

</script>
