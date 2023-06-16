<template>
  <nuxt-layout name="ntm-auth">
    <NtmForgotBoxMobile @action="forgot" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function forgot(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

</script>
