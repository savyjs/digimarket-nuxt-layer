import dotenv from "dotenv"
dotenv.config()

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi'
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