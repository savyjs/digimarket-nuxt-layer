<template>
  <div
      class="megaMenu rounded-b-xl left-[1%] right-[1%] w-[98%] z-10 mt-[10px] absolute h-[80vh] mb-16 bg-white px-0 shadow-xl sm:mb-0">
    <div class="flex h-fit w-full justify-between">
      <div class="w-1/6 border-l border-gray-200">
        <div>
          <nuxt-link
              v-for="(category,index) in items"
              :key="category.key"
              :to="`/categories/${category.key}`"
              @mouseover="megaMenuMainCategoryIndex = index"
              class="hover flex items-center px-1 py-4 text-right hover:bg-gray-100 hover:fill-red-500 hover:text-red-500"
          >
            <svg class="h-4 w-4" fill="currentColor">
              <use :href="category?.icon"></use>
            </svg>
            <span class="pr-2 text-[11px] font-bold"> {{ category?.title }}</span>
          </nuxt-link>
        </div>
      </div>
      <div v-if="mainCategory" class="w-full px-4">
        <div class="flex">
          <div class="w-4/5">
            <a class="flex cursor-pointer py-4 text-right text-[11px] text-gray-700">
              <span class="pl-1">همه </span>
              <span>{{ mainCategory?.title }}</span>
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#chevronLeft"></use>
              </svg>
            </a>

            <div class="flex h-[70vh] flex-col flex-wrap pb-5">
              <template v-for="category in mainCategory.categories">
                <NuxtLink :to="`/categories/${category.key}`">
                  <a class="mt-1 flex  py-1 hover:text-red-600">
                    <span class="w-0.5 bg-red-600"></span>
                    <span class="pl-1 pr-2 font-bold"> {{ category?.title }}</span>

                    <svg class="h-3 w-3" fill="currentColor">
                      <use href="#chevronLeft"></use>
                    </svg>
                  </a>
                </NuxtLink>
                <template v-for="subCategory in category.subCategories">
                  <NuxtLink :to="`/categories/${subCategory.key}`">
                    <a class="mt-1 flex py-1 text-[11px] text-gray-500  hover:text-red-600">
                      <span class="px-2"> {{ subCategory?.title }}</span>
                    </a>
                  </NuxtLink>
                </template>
              </template>
            </div>
          </div>
          <div class="w-1/5 pt-4">
            <a class="">
              <img
                  :src="mainCategory?.img || '/assets/img/MegaMenuRandom.jpg'"
                  class="rounded-lg"
                  alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const megaMenuMainCategoryIndex = ref(0)
const props = defineProps(['menuItems']);
const menuItems = props?.menuItems || await $fetch('/api/market/megamenu') || [];
const items = ref(menuItems);
const mainCategory = computed(() => {
  return items.value[megaMenuMainCategoryIndex.value];
});
const backdrop = useState('backdrop')
const megaMenuStatus = useState('megaMenuStatus', () => false)
watch(megaMenuStatus, async (val: boolean) => {
  backdrop.value = val;
})
</script>