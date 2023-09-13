import dotenv from "dotenv"

dotenv.config()

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi'
    ],
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    },
    // @ts-ignore
    strapi: {
        url: process.env?.VSD_API_URL || "/api"
    }
})