import {defineNuxtConfig} from "nuxt/config";
import VsdVuetify from "./plugins/VsdVuetify";

export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    vite: {
        plugins: [
            VsdVuetify()
        ]
    },
    strapi: {
        url: 'http://localhost:1337'
    },
})