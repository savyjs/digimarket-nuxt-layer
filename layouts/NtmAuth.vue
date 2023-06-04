<template>
  <div :class="{'light': !darkmode , 'rtl': rtl,'min-h-screen' : true,'bg-default' : true }">
    <LangNtmSwitchLang/>
    <slot/>
  </div>
</template>
<script setup>

const darkmode = useDarkmode()
const rtl = useRtl()
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