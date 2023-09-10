<template>
<span class="text-center">
      <v-btn v-if="!darkmode" fab icon small @click="toggleTheme()">
        <v-icon icon="mdi-brightness-4"/>
      </v-btn>
      <v-btn v-else icon fab small @click="toggleTheme()">
        <v-icon icon="mdi-brightness-5"/>
      </v-btn>
      </span>
</template>

<script setup>

const darkmode = useState("darkmode", () => true)
import {useTheme} from 'vuetify'


const theme = useTheme()

function toggleTheme() {
  darkmode.value = !darkmode.value
  theme.global.name.value = darkmode.value ? 'dark' : 'light'
}


onMounted(() => {
  darkmode.value = localStorage.theme == 'dark'
  theme.global.name.value = darkmode.value ? 'dark' : 'light'
})

</script>