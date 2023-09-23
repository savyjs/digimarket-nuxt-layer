<template>
  <div>
    {{ count }}
    {{ useMessages().inbox }}
    {{ message }}
  <div
      v-show="count"
      :class="`toast-${type}`"
      class="toast">
    <button class="close-btn"
            @click="closeToast">
      <i class="ti ti-x icon-sm"></i>
    </button>
    <div class="toast-body">
      <h4>{{ message?.title }}</h4>
      {{ message?.message }}
      <div class="text-sm pt-2">
        <template v-if="useMessages().count('toast') > 1">
          <hr/>
          <div class="flex justify-between">
            <small>{{ useMessages().count('toast') }} more messages left</small>
            <button class=""
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

let message = useMessages().newest('toast')
let count = useMessages().count('toast')
const type = message?.type || 'info';

function closeToast() {
  useMessages().read(message)
}

function closeAllToasts() {
  useMessages().readAll('toast')
}
</script>