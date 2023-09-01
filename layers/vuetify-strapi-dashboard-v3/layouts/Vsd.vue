<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
        class="drawertext--text"
        v-model="drawer"
        fixed
        :right="isRTL"
        :temporary="isMobile"
    >
      <LayoutVsdMenu></LayoutVsdMenu>
    </v-navigation-drawer>

    <v-app-bar elevation="1" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="appbartext--text" style="cursor: pointer"
                       @click="$router.push('/admin')">{{
          $t("dashboard")
        }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="text-center mx-2">
        <template v-for="item in navbarMenu">
          <component :is="item.component" v-if="item?.component"/>

        <v-menu
            v-else-if=" item?.items"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
        >
          <template v-slot:activator="{ on }">
          <v-btn
              fab
              icon
              :to="item?.to"
              :href="item?.link"
              @click="item?.onclick"
              :target="item?.target"
          >
          <v-icon>{{ item?.icon }}</v-icon>
          </v-btn>
          </template>
        <v-list>
         <v-list-item v-for="(subItem,i) in item?.items" :to="subItem?.link" :key="i">
           <v-list-item-title>{{ subItem?.title }}</v-list-item-title>
         </v-list-item>
        </v-list>
        </v-menu>
          <v-btn
              v-else
              fab
              icon
              :to="item?.link"
              :target="item?.target"
          >
          <v-icon>{{ item?.icon }}</v-icon>
          </v-btn>
          </template>
      </span>
      <LayoutVsdNotifications v-if="showNotifications"/>
      <LayoutVsdSettings v-if="showSettings"/>
      <LayoutVsdAccount/>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <nuxt-page/>
    </v-main>
    <v-footer app class="py-0" inset>
      <v-btn x-small outlined elevation="0" class="mb-1 mx-1 pa-1 mt-1 font-10">
        {{ FOOTER_TITLE || 'VSD' }}
        {{ VERSION }}
      </v-btn>
    </v-footer>
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