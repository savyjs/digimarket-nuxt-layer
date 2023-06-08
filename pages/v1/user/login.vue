<template>
  <nuxt-layout name="ntm-auth">
    <ntm-login-box-mobile-password @action="login" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function login(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

import NtmLoginBoxMobilePassword from "~/components/user/NtmLoginBoxMobilePassword.vue";

</script>
