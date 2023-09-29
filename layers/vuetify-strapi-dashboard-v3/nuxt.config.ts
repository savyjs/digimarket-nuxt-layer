import dotenv from "dotenv"

dotenv.config()
dotenv.populate(process.env, {AUTH_SCHEMA: 'vsd'})

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi',
        '@vee-validate/nuxt',
        '@pinia/nuxt'
    ],
    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
    strapi: {
        url: process.env?.API_URL || "/api"
    },
    css: [
        "@tabler/icons-webfont/tabler-icons.min.css",
    ],
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    }
})