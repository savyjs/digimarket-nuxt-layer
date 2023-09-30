<template>
  <div>
    <v-snackbar
        v-for="message in useMessages().unread('toast')"
        v-model="message.show"
        :timeout="timeScope"
        multi-line
    >
      {{ message?.message || $t('Unknown Error!') }}
      <template v-slot:actions>
        <v-btn
            :color="message?.type || 'info'"
            variant="text"
            @click="closeToast(message?.id)"
        >
          {{ $t("vsd.close", "Close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">

const timeScope: number = (useAppConfig()?.vsd?.messageTime ?? 20) * 1000;

const messageCount = ref(useMessages().count('toast'));

function closeToast(message) {
  useMessages().read(message)
}

function closeAllToasts() {
  useMessages().readAll('toast')
}
</script>