import dotenv from "dotenv"

dotenv.populate(process.env, {AUTH_SCHEMA: 'vsd'})

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi',
        '@vee-validate/nuxt',
        '@pinia/nuxt'
    ],
    extends: [
        'digimarket-nuxt-layer-auth'
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
    css: [
        "@tabler/icons-webfont/tabler-icons.min.css",
    ],
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    }
})