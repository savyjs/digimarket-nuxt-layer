<template>
  <NuxtLayout name="ntm-demo">
    <div :class="{'min-h-screen' : true,'bg-default' : true }">
      <div class="container mx-auto">
        <div class="h-full min-w-full py-10">
          <div
              class="mx-auto max-w-lg py-5 md:px-10 sm:p-6 lg:p-6">
            <div class="mb-5 flex w-full justify-center text-center">
              <nuxt-link to="/" v-if="logo || title">
                <a class="text-link px-0.5" v-if="logo">
                  <img width="150" height="40" :src="logo" :alt="title"/>
                </a>
                <span v-else>
                  {{ title }}
                </span>
              </nuxt-link>
            </div>
            <slot/>
          </div>
        </div>
      </div>
      <ui-ntm-toast/>
    </div>
  </NuxtLayout>
</template>
<script setup>

const darkmode = useDarkmode()
const rtl = useRtl()
const backdrop = useState('backdrop', () => false)

const {newest} = useMessages()
const message = newest('auth')

let {logo, title} = useAppConfig()?.digimarket;

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkmode.value = true;
  } else {
    darkmode.value = false;
  }


})

</script>