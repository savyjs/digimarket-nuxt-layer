<template>
  <div class="h-80 overflow-y-auto px-2">
    <div
        v-if="depthLevel > 0"
        @click="unselectDivision"
        class="mr-2 flex cursor-pointer items-center justify-between border-b
             border-gray-100 p-2 py-4 text-sm font-bold text-gray-800"
    >
      <span>...</span>
      <svg class="h-5 w-5" fill="currentColor">
        <use href="#chevronLeft"></use>
      </svg>
    </div>
    <div
        v-for="(item,key) in activeDivisions"
        @click="selectDivision(item,key)"
        :data-bs-dismiss="item?.items ? '' : 'modal'"
        class="mr-2 flex cursor-pointer items-center justify-between border-b
             border-gray-100 p-2 py-4 text-sm font-bold text-gray-800"
    >
      <span>{{ item?.title }}</span>
      <svg class="h-5 w-5" fill="currentColor">
        <use href="#chevronLeft"></use>
      </svg>
    </div>
  </div>
</template>
<script setup>

const emit = defineEmits(['input'])
const props = defineProps(['value'])
const {divisions} = []
const activeDivisions = ref(divisions);
const lastActiveDivision = ref(divisions);
const depthLevel = ref(0);
const depthLevelItems = ref({});

const unselectDivision = () => {
  depthLevel.value--;
  activeDivisions.value = depthLevelItems.value[depthLevel.value];
}
const selectDivision = (item, key) => {
  if (item?.items) {
    lastActiveDivision.value = activeDivisions.value;
    depthLevelItems.value[depthLevel.value] = lastActiveDivision.value;
    activeDivisions.value = item.items;
    depthLevel.value++;
  } else {
    emit('input', item?.id || item?.key)
  }
}
</script>