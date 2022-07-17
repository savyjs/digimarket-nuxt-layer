<template>
  <div class="ml-auto h-10 flex sm:w-1/3 md:w-2/3 xl:w-2/5 w-1/2">
    <div
        @click="showSearchModal=true"
        v-show="!showSearchModal"
        class="px-4-lg bg-gray-100 text-body-2 rounded-8p flex h-10 items-center w-full">

      <div class="pr-2 pl-3 text-[13px] text-gray-400">
        <i class="fa fa-search"></i>
      </div>
      <div class="cursor-text text-[12px] text-gray-400">
        جستجو
      </div>
    </div>

    <div
        v-show="showSearchModal"
        id="overlay-searchModal"
        class="h-full delay-700 w-full md:h-auto z-50"
    >
      <div id="searchModal" class="relative h-full w-full md:h-auto">
        <div class="relative rounded-lg bg-white shadow-lg dark:bg-gray-700">
          <div class="ml-auto h-10 flex-auto grow">
            <div
                id="search-box"
                class="text-body-2 rounded-8p w-full items-center overflow-y-auto bg-white px-3 pb-3"
            >
              <div class="flex w-full items-center border-b border-blue-400">
                <span class="px-2 text-[13px] text-gray-400">
                  <i class="fa fa-search"></i>
                </span>
                <input
                    class="rounded-8p w-full border-none px-1 text-[12px] text-gray-700 ring-0 focus:ring-0"
                    placeholder="جستجو"
                    type="text"
                    autoFocus
                />
              </div>
              <div class="p-1">
                <div class="text-body-2 rounded-8p ">
                  <div class="mt-3 text-right">
                    <span>جستجوهای پرطرفدار</span>
                  </div>

                  <div class="mt-3 flex">
                    <div v-for="tag in tags"
                         class="mr-2 flex items-center rounded-3xl border border-gray-300 p-2 text-sm text-gray-600">
                      <span class="pr-2">{{ tag?.title }}</span>
                      <svg class="h-4 w-4" fill="currentColor">
                        <use href="#chevronLeft"></use>
                      </svg>
                    </div>
                  </div>

                </div>
                <div class="mt-3">
                  <img
                      class="rounded"
                      src="/assets/img/searchModal-banner.jpg"
                      alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const showSearchModal = useState('showSearchModal', () => false);
const backdrop = useState('backdrop')
watch(showSearchModal, async (val) => {
  if (val) backdrop.value = true;
})
watch(backdrop, async (val) => {
  if (!val) showSearchModal.value = false;
})
const tags = [
  {
    key: '1',
    title: 'زیبو',
  },
  {
    key: '1',
    title: 'سیدونا',
  },
  {
    key: '1',
    title: 'کلوتو',
  },
  {
    key: '1',
    title: 'mango',
  },
  {
    key: '1',
    title: 'ورزشی زنانه',
  },
];
</script>

<style lang="scss" scoped>
.searchBox {
  background-color: #f0f0f1;
}

.logoLogin {
  svg {
    display: inherit;
  }
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: baseline;
}

.nav li {
  margin-right: 1.5rem;
}


</style>