<template>
  <div :class="{'light': !darkmode , 'rtl': true,'min-h-screen' : true,'bg-default' : true }">
    <NtmMarketHeader/>
    <main class="container bg-default mx-auto pt-[110px]">
      <transition>
        <div id="backdrop-searchModal" v-show="backdrop">
          <div class="backdrop delay-700" @click="backdrop=false"></div>
        </div>
      </transition>
      <NuxtPage/>
    </main>
    <NtmSvgIcons/>
  </div>
</template>
<script setup>
const darkmode = useDarkmode()
const backdrop = useState('backdrop', () => false)

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkmode.value = true;
  } else {
    darkmode.value = false;
  }

})

</script>