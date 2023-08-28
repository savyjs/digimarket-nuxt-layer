import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    strapi: {
        url: 'http://localhost:1337'
    }
})