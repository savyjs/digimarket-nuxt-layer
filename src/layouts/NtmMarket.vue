<template>
  <div class="container mx-auto bg-red-700">
    <NtmSvgIcons/>
    <NtmMarketHeader/>
    <main class="container bg-red-700 m-[70px]">
      <transition>
        <div id="backdrop-searchModal" v-if="backdrop">
          <div class="backdrop delay-700" @click="backdrop=false"></div>
        </div>
      </transition>
      <NuxtPage/>
    </main>
    <NtmMarketFooter/>
  </div>
</template>
<script setup>
let backdrop = useState('backdrop', () => false)
</script>