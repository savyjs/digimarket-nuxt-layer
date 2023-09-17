<template>
  <div class="d-block mt-3 mb-n5 mx-n1" style="z-index: 999 !important;">
    <v-card
        :height="props?.height || 100"
        :color="props?.color || 'primary'"
        :tile="props?.tile"
        :dark="props?.dark"
        :elevation="props?.elevation || 5"
        style="z-index: 999 !important;"
        :loading="props?.loading"
        class="d-flex justify-center px-2"
        :class="props?.classes"
    >
      <slot/>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(['value', 'icon', 'height', 'color', 'marginTop', 'marginBottom', 'left', 'loading', 'paddingRight', 'align', 'justify', 'classes', 'dark', 'width', 'elevation', 'tile', 'marginRight', 'marginLeft']);
const loading = useState('loading', () => true)

onMounted(() => {
  loading.value = false
})


const elevation = computed(() => {
  return props?.elevation || 4
})

</script>
