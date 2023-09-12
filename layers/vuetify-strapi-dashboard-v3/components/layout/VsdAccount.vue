<template>
  <div class="text-center">

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar variant="outlined" density="compact">
            <v-img
                max-width="100%"
                max-height="100%"
                :src="userImage"
            />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <p
                class="font-12 pt-1">{{ user?.name || '' }} {{
                user?.lastname || ''
              }} ({{ user?.username || 'Username' }})</p>
            <p class="font-12 pt-1">{{ user?.email || 'No Email Address' }}</p>
            <small class="font-11 py-1">{{ user?.role?.name || 'User' }}</small>
          </v-list-item-content>
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
            @click="menu=false"
        >
          <v-dialog
              v-model="dialog"
              max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-title
                  v-bind="attrs"
                  v-on="on">
              </v-list-item-title>
            </template>
            <v-card>
              <v-card-text class="pt-5">
                {{ $t('vsd.quit_alert', 'Are you sure?') }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                    color="info darken-1"
                    @click="dialog = false"
                >
                  {{ $t('vsd.close', 'Close') }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="warning darken-1"
                    @click="logout"
                >
                  {{ $t('logout', 'Logout') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
const dialog = ref(false)
const menu = ref(false)
const user = useState("user", () => {
})


let userImage = user?.image || '/assets/img/avatar.png'

function logout() {

}
</script>