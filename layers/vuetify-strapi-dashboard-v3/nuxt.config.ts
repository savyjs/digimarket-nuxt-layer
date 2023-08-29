import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    // @ts-ignore
    strapi: {
        url: 'http://localhost:1337'
    }
})