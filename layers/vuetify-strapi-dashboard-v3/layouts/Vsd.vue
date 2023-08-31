<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
        color="drawer"
    >
    </v-navigation-drawer>
    <v-main>
      <nuxt-page />
    </v-main>
  </v-layout>
</template>
<script setup>

// TODO: refactor and use composable
const drawer = useState('VSDDrawer', () => true);
const isRTL = useState('isRTL', () => true);
const isMobile = useState('isMobile', () => false);
const showNotifications = useState('showNotifications', () => false);
const showSettings = useState('showSettings', () => false);
const navbarMenu = [];
const FOOTER_TITLE = 'VSD'
const VERSION = 0.1
</script>