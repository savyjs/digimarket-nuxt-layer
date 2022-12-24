<script setup>
let darkmode = useDarkmode
let backdrop = useState('backdrop', () => false)
</script>
<template>
  <div :class="`rtl ${false ? 'dark' : 'light'}`">
    <NtmMarketHeader/>
    <main class="container mx-auto mt-[110px]">
      <transition>
        <div id="backdrop-searchModal" v-show="backdrop">
          <div class="backdrop delay-700" @click="backdrop=false"></div>
        </div>
      </transition>
      <NuxtPage/>
      type: {{ typeof darkmode }}
    </main>
    <NtmSvgIcons/>
  </div>
</template>