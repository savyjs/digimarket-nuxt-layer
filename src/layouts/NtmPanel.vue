<template>
  <div :class="{'dark' :!!darkmode , 'light': !darkmode , 'rtl': true,'min-h-screen' : true,'bg-default' : true }">
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
</script>