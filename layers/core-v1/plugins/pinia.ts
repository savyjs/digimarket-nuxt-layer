import {defineNuxtPlugin} from "nuxt/app";
import {createPinia} from 'pinia'


export default defineNuxtPlugin(nuxtApp => {

    const pinia = createPinia()
    const app = nuxtApp.vueApp.use(pinia)

})