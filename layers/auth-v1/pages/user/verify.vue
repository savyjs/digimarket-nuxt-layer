<template>
  <nuxt-layout name="ntm-auth">
    <UserNtmVerifyBox @action="verify" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function verify(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

</script>
