import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
import dotenv from "dotenv"

dotenv.config()

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/strapi',
        '@vee-validate/nuxt'
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
        //join(currentDir, "./assets/styles/ntm.scss"),
        "@tabler/icons-webfont/tabler-icons.min.css",
        join(currentDir, "./tailwind/all.css")
    ]
})
