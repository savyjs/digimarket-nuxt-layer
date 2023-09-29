<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-strapi-register-box :is="componentName" @action="register"></user-ntm-strapi-register-box>
  </nuxt-layout>
</template>

<script setup>
// Detecting schema
const schemaName = useAppConfig?.authSchema ?? 'ntm'

// Available components

const componentMap = {
  ntm: "user-ntm-strapi-register-box",
  vsd: "user-vsd-strapi-register-box"
}

// Selecting the component
const componentName = componentMap?.[schemaName]

// Sending event
async function verify(credential) {
  useVerify(credential).resend()
}

</script>
