<template>
  <nuxt-layout name="ntm-auth">
    <NtmVerifyBox @action="verify" mobile=""/>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";
import NtmVerifyBox from "~/components/user/NtmVerifyBox.vue";

async function verify(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

</script>
