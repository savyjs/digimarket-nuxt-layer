<template>
  <div
      v-show="useMessages().count('toast')"
      @change="closeToastDelay(useMessages().newest('toast')?.id)"
      :class="`toast-${useMessages().newest('toast')?.type || 'info'}`"
      class="toast">
    <button class="close-btn"
            @click="closeToast(useMessages().newest('toast')?.id)">
      <i class="ti ti-x icon-sm"></i>
      ({{ useMessages().timeRemaining }})
    </button>
    <transition duration="100" mode="in-out" type="transition">
      <div class="toast-body" v-show="useMessages().count('toast')">
        <h4>{{ $t(useMessages().newest('toast')?.title || "ntm.message_title", "Message") }}</h4>
        {{ useMessages().newest('toast')?.message || $t('Unknown Error!') }}
        <div class="text-sm pt-2">
          <template v-if="useMessages().count('toast') > 1">
            <hr/>
            <div class="flex justify-between">
              <small>{{ useMessages().count('toast') }} more messages left</small>
              <button
                  @click="closeAllToasts">
                <small>{{ $t("ntm.close_all", "Clear All") }}</small>
              </button>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>

function closeToast(message) {
  useMessages().read(message)
}

function closeAllToasts() {
  useMessages().readAll('toast')
}
</script>