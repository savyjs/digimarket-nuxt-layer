<template>
  <nuxt-layout name="ntm-auth">
    <UserNtmLoginBoxEmailPassword @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

async function login(credential) {
  useLogin(credential)
}

</script>
