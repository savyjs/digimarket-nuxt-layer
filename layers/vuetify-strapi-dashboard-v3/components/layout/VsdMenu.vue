<template>
  <v-list color="drawer">
    <v-list-item color="drawertext">
      <v-text-field
          color="drawertext"
          class="drawertext--text"
          v-model="search"
          outlined append-icon="search" dense clearable
          :placeholder="$t('search')"></v-text-field>
    </v-list-item>
    <template  v-for="(menuItem, i) in getItems">
      <template v-if="isAllowedMenu(menuItem)">
        <v-list-item color="drawertext" v-if="!_.has(menuItem,'items[0]') " :to="menuItem.link">
          <v-list-item-icon class="mx-1">
            <v-icon size="15" color="drawertext">{{ menuItem.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <b class="font-13 drawertext--text">{{ capitalize($t(menuItem.title)) }}</b>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group color="drawertext" v-else>
          <template v-slot:activator>
            <v-list-item-icon class="mx-1">
              <v-icon size="15" color="drawertext">{{ menuItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <b class="font-13 drawertext--text">{{ capitalize($t(menuItem.title)) }}</b>
            </v-list-item-title>
          </template>
          <template v-for="(item, i) in menuItem.items" v-if="isAllowedMenu(item)">
            <v-list-item
                :to="_.get(item,'link','')"
                router
                class="mr-1 drawertext--text"
                exact
            >
              <v-list-item-icon v-show="false">
                <v-icon class="font-18 mx-0 drawertext--text">{{ _.get(item, 'icon', '') }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-12 mr-5 drawertext--text"
                                   v-text="capitalize($t(_.get(item,'title','')))"/>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </template>
  </v-list>
</template>
<script>

defineProps('data', 'value', 'label', 'items')

</script>
