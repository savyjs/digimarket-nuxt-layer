<template>
  <div class="text-center">

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">

        <v-btn v-if="userImage" icon v-bind="props">
          <v-avatar variant="outlined" density="compact">
            <v-img
                max-width="100%"
                max-height="100%"
                :src="userImage"
            />
          </v-avatar>
        </v-btn>
        <v-btn
            v-else
            v-bind="props"
            fab
            icon
        >
          <v-icon icon="mdi-account-circle"/>
        </v-btn>

      </template>

      <v-list>
        <v-list-item>
            <p
                class="font-12 pt-1">{{ user?.name || '' }} {{
                user?.lastname || ''
              }} ({{ user?.username || 'Username' }})</p>
            <p class="font-12 pt-1">{{ user?.email || 'No Email Address' }}</p>
            <small class="font-11 py-1">{{ user?.role?.name || 'User' }}</small>
        </v-list-item>

        <v-divider/>
        <v-list-item
            to="/admin/system/profile/"
            prepend-icon="mdi-human-edit"
            :title="$t('vsd.edit_profile', 'Edit Profile')"
        >
        </v-list-item>
        <v-list-item
            :title="$t('logout', 'Logout')"
            prepend-icon="mdi-lock"
            @click="useAuthNavigate('logout')"
        >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
const dialog = ref(false)
const menu = ref(false)
const user = useUser()


let userImage = user?.value?.avatar

function logout() {
  useAuthNavigate('logout')
}
</script>