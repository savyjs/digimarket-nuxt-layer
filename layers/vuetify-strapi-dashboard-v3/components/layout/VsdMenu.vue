<template>
  <v-list color="drawer">
    <v-list-item color="drawertext">
      <v-text-field
          v-model="search"
          variant="underlined"
          append-icon="fa-search"
          dense
          :placeholder="$t('vsd.search','Search ...')"></v-text-field>
    </v-list-item>
    <template v-for="(menuItem, i) in drawerItems">
      <template v-if="isAllowedMenu(menuItem)">
        <v-list-item
            v-if="!menuItem?.items?.length"
            :to="menuItem?.to"
            :href="menuItem?.link"
            :prepend-icon="menuItem?.icon ?? (isRTL ? 'mdi-menu-left' : 'mdi-menu-right')"
            :title="capitalize($t(menuItem?.title))"
        >
        </v-list-item>
        <v-list-group v-else>
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                :to="menuItem?.to"
                :href="menuItem?.link"
                :prepend-icon="menuItem?.icon"
                :title="capitalize($t(menuItem?.title))"
            >
            </v-list-item>
          </template>
          <template v-for="(item, i) in menuItem.items">
            <v-list-item
                v-if="isAllowedMenu(item)"
                :to="item?.to"
                :href="item?.link"
                router
                :prepend-icon="item?.icon"
                :title="capitalize($t(item?.title))"
            ></v-list-item>
          </template>
        </v-list-group>
      </template>
    </template>
  </v-list>
</template>
<script setup>
import {useRtl} from 'vuetify'

defineProps(['data', 'value', 'label', 'items'])
const showLoader = useState('showLoader', () => true)
const appConfig = useAppConfig();
const search = useState('SearchInMenu', () => '')
const isRTL = useRtl();

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function isAllowedMenu(item) {
  // Check user permissions
  return item?.title && (item?.avtive !== false)
}

const drawerItems = appConfig?.vsd?.menu?.drawer;
</script>
