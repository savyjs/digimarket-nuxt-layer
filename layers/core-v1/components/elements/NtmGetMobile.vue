<template>
  <div>
    <div>
      <input
          type="text"
          v-model="credential"
          class="input-primary py-3 w-full dark:border-gray-800 dark:text-gray-900"
          required
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['action'])
const props = defineProps<{
  mobile: string | number
}>()
const credential = ref(props?.mobile)


</script>