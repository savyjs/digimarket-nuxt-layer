<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
        class="drawertext--text"
        v-model="drawer"
        fixed
        location="start"
        :temporary="isMobile"
    >
      <v-list style="display: flex;flex-wrap: wrap;" dense>
        <v-list-item>
          <v-row>
            <template>
              <v-col cols="3" class="pt-1 mt-2">
                <v-avatar>
                  <v-img
                      max-width="100%"
                      contain
                      :src="systemLogo"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="6" class="pt-0 mt-0">
                <v-list-item-content>
                  <v-list-item-title class="pt-5 drawertext--text">
                    <small> {{ $t("vsd.control_panel", "User panel") }} </small>
                    <p><b>{{ singleTitle }}</b></p>
                  </v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-col cols="1" v-if="nightModeToggle">
                <v-btn v-if="!nightMode" fab icon class="mt-1 drawertext--text" small @click="nightMode=true">
                  <v-icon>brightness_4</v-icon>
                </v-btn>
                <v-btn v-if="nightMode" icon fab class="mt-1 drawertext--text" small @click="nightMode=false">
                  <v-icon>brightness_high</v-icon>
                </v-btn>
              </v-col>
            </template>
            <template v-if="SHOW_USER == 'true'">
              <v-col cols="3" class="pt-0 mt-0">
                <v-hover>
                  <nuxt-link to="/admin/system/profile/edit">
                    <v-list-item-avatar size="45">
                      <v-img
                          contain
                          :src="defaultPhoto"
                      />
                    </v-list-item-avatar>
                  </nuxt-link>
                </v-hover>
              </v-col>
              <v-col cols="9" class="pt-0 mt-0">
                <v-list-item-content>
                  <v-list-item-title class="drawertext--text">
                    <p>{{ _.get(user, 'role.name', 'user') }}</p>
                    <small>{{ _.get(user, 'username', 'name') }} ، welcome</small>
                  </v-list-item-title>
                </v-list-item-content>
              </v-col>
            </template>
          </v-row>
        </v-list-item>
      </v-list>
      <LayoutVsdMenu></LayoutVsdMenu>
    </v-navigation-drawer>
    <v-app-bar elevation="1" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="cursor: pointer"
                       @click="$router.push('/admin')">{{
          $t("vsd.dashboard", "Dashboard")
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
        {{ footerTitle || 'VSD' }}
        {{ Version }}
      </v-btn>
    </v-footer>
  </v-layout>
</template>
<script setup>

const appConfig = useAppConfig();
import {useDisplay, useRtl} from 'vuetify'
// TODO: refactor and use composable
const drawer = useState('VSDDrawer', () => true);
const isRTL = useRtl();
const {mobile} = useDisplay()

let isMobile = false;

onMounted(() => {
  isMobile = mobile.value
})

const singleTitle = appConfig?.vsd?.title;
const systemLogo = appConfig?.vsd?.systemLogo || "~/assets/img/vsd.png";

const showNotifications = useState('showNotifications', () => false);

// Drawer
const showSettings = useState('showSettings', () => false);
const nightModeToggle = useState("nightModeToggle", () => true)
const nightMode = useState("nightMode", () => true)
const SHOW_USER = useState("SHOW_USER", () => true)
const defaultPhoto = useState("defaultPhoto", () => '')
const user = useState("user", () => {
})

const navbarMenu = [];
const footerTitle = appConfig?.vsd?.footerTitle || 'VSD'
const Version = 0.1
</script>