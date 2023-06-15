<template>
    <div class="container mx-auto">
        <NtmSvgIcons/>
        <NtmMarketHeader/>
        <main class="container mx-auto mt-[110px]">
            <transition>
                <div id="backdrop-searchModal" v-show="backdrop">
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