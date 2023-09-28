<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-verify-box @action="verify" mobile=""/>
  </nuxt-layout>
</template>
<script setup>


async function verify(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

</script>
