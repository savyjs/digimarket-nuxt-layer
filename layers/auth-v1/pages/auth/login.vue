<template>
  <nuxt-layout :name="`${schemaName}-auth`">
    <component :is="componentName" @action="login"/>
  </nuxt-layout>
</template>

<script setup>
// Detecting schema
const schemaName = useAppConfig?.authSchema ?? 'ntm'

// Available components

const componentMap = {
  ntm: "user-ntm-strapi-login-box",
  vsd: "user-vsd-strapi-login-box"
}

// Selecting the component
const componentName = componentMap?.[schemaName]

// Sending event
async function login(credential) {
  useLogin(credential)
}

</script>
