<template>
  <div class="fixed top-0 left-0 z-50 mb-3 h-fit w-full bg-default pb-1">
    <section class="hidden md:block">
      <NtmMarketTop/>
    </section>
    <section class="md:hidden">
      <NtmMarketTopMobile/>
    </section>
    <section class="hidden md:block">
      <NtmMarketNavbar/>
    </section>
  </div>
</template>
<script setup>
import NtmMarketTop from "~/components/market/NtmMarketTop.vue";
import NtmMarketTopMobile from "~/components/market/NtmMarketTopMobile.vue";
import NtmMarketNavbar from "~/components/market/NtmMarketNavbar.vue";
</script>
