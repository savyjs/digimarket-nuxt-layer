<template>
  <nuxt-layout name="ntm-auth">
    <ntm-login-box>
      <ntm-get-mobile @action="register" mobile="">
      </ntm-get-mobile>
    </ntm-login-box>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function register(credential) {
  useApi("/login").then(res => {
    useRouter().push('./verify')
  })
}

import NtmGetMobile from "~/components/user/NtmGetMobile.vue";
import NtmLoginBox from "~/components/user/NtmLoginBox.vue";

</script>
