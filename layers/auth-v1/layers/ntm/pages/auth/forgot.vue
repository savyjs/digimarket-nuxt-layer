<template>
  <nuxt-layout :name="`${schemaName}-auth`">
    <component :is="componentName" @action="forgot"/>
  </nuxt-layout>
</template>

<script setup>
// Detecting schema
const schemaName = useAppConfig?.authSchema ?? 'ntm'

// Available components

const componentMap = {
  ntm: "user-ntm-strapi-forgot-box",
  vsd: "user-vsd-strapi-forgot-box"
}

// Selecting the component
const componentName = componentMap?.[schemaName]

// Sending event
async function forgot(credential) {
  useForgot(credential)
}

</script>
