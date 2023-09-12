<template>
  <nuxt-layout name="ntm-auth">
    <UserNtmLoginBoxMobilePassword @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function login(credential) {
  useNtmLogin(credential, "/login", 'POST').then(res => {
    useRouter().push('./verify')
  })
}

</script>
