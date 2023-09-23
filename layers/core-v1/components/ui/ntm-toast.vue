<template>
  <div>
    {{ useMessages().newest('toast') }}

  <div
      v-show="useMessages().count('toast')"
      :class="`toast-${useMessages().newest('toast')?.type || 'info'}`"
      class="toast">
    <button class="close-btn"
            @click="closeToast(useMessages().newest('toast')?.id)">
      <i class="ti ti-x icon-sm"></i>
    </button>
    <div class="toast-body">
      <h4>{{ useMessages().newest('toast')?.title }}</h4>
      {{ useMessages().newest('toast')?.message }}
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
  </div>
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