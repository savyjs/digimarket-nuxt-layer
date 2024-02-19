import dotenv from "dotenv"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
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
        "@tabler/icons-webfont/dist/tabler-icons-filled.min.css",
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
        //...
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})