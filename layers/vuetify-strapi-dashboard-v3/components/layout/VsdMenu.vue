<template>
  <v-list color="drawer">
    <v-list-item color="drawertext">
      <v-text-field
          v-model="search"
          outlined
          append-icon="search"
          dense
          clearable
          :placeholder="$t('vsd.search','Type something ...')"></v-text-field>
    </v-list-item>
    <template v-for="(menuItem, i) in drawerItems">
      <template v-if="isAllowedMenu(menuItem)">
        <v-list-item
            v-if="!menuItem?.items?.length"
            :to="menuItem?.to"
            :href="menuItem?.link"
            :prepend-icon="menuItem?.icon"
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
          <template v-for="(item, i) in menuItem.items" v-if="isAllowedMenu(item)">
            <v-list-item
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

defineProps(['data', 'value', 'label', 'items'])
const showLoader = useState('showLoader', () => true)
const appConfig = useAppConfig();

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function isAllowedMenu(s) {
  // Check user permissions
  return !!s?.title
}

const drawerItems = appConfig?.vsd?.menu?.drawer;
</script>
