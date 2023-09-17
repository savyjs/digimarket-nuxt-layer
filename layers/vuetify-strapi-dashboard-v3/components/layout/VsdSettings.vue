<template>
  <span class="text-center">
        <v-btn
            fab
            icon
            :to="settingsRoute"
        >
          <v-icon icon="mdi-cog"/>
          </v-btn>
  </span>
</template>

<script setup>
const settingsRoute = `/admin/system/settings`
</script>
