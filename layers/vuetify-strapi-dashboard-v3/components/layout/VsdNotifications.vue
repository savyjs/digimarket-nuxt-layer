<template>
  <span class="text-center">
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
        >
          <template v-slot:activator="{ props }">
          <v-btn
              v-bind="props"
              :loading="loader"
              fab
              icon
              small
          >
          <v-icon icon="mdi-bell"></v-icon>
            <v-badge v-if="getUnreadMessages.length > 0" dot="" color="error"/>
          </v-btn>
          </template>

      <v-card>
          <v-card-actions>
          <v-btn
              :to="crmNotification"
              small>
              <v-icon class="mx-1" small icon="mdi-inbox-full"/>
              <small>{{ $t('vsd.go_to_inbox', 'Go to inbox') }}</small>
          </v-btn>
            <v-spacer/>
          <v-btn
              @click="getNotifications"
              fab
              icon
              :loading="loader"
              small>
              <v-icon class="mx-1" small icon="mdi-refresh"/>
          </v-btn>
          </v-card-actions>
                        <v-divider/>
        <v-list v-if="getUnreadMessages.length">
          <v-list-item :prepend-icon="icons?.[message?.type] || 'alert'" class="grey lighten-4"
                       v-for="(message,i) in getUnreadMessages" :key="i">
                <small>{{ message.text }}</small>
                <v-btn
                    @click="markRead(message)"
                    class="green--text"
                    icon
                    flat=""
                    small
                >
                <v-icon small>check</v-icon>
              </v-btn>

          </v-list-item>
        </v-list>
          <div class="full font-12 text-center ma-1 pb-2 lighten-1" v-else>
              {{ $t('vsd.empty', 'No new messages') }}
          </div>
        <v-divider/>
        <v-card-actions v-if="getUnreadMessages.length">
            <v-btn class="" x-small color="success" @click="markAllRead()">
                <v-icon small class="mx-1" icon="mdi-check"/>
                {{ $t('vsd.mark_all', 'Mark All') }}
            </v-btn>
            <v-spacer/>
            <v-btn class="" x-small color="error" @click="menu = false">
                <v-icon small class="mx-1" icon="mdi-close"/>
                {{ $t('vsd.close', 'Close') }}
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

  </span>
</template>

<script setup>

// TODO: refactor to modern version
const loader = useState('loader', () => false)
const menu = ref(false)
const messages = useState('messages', () => [])
const crmNotification = useState('crmNotification', () => '/admin')

function getUnreadMessages() {
  return []
}

function getNotifications() {
  return []
}

function markAllRead() {
  return []
}
</script>
