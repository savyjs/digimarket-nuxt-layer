<template>
  <nuxt-layout name="ntm-auth">
    <UserNtmLoginBoxMobilePassword @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";
async function login(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

</script>
