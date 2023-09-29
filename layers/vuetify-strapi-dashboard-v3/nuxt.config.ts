import dotenv from "dotenv"

dotenv.config()

dotenv.populate(process.env, {AUTH_SCHEMA: 'vsd'})
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi'
    ],
    extends: [
        "digimarket-nuxt-layer-auth"
    ],
    strapi: {
        url: process.env?.API_URL || "/api"
    },
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    }
})