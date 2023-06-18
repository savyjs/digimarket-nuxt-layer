import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Vue3Lottie)
})