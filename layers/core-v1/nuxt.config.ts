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
        '@nuxtjs/strapi'
    ],
    strapi: {
        url: process.env?.API_URL || "/api"
    },
    css: [
        //join(currentDir, "./assets/styles/ntm.scss"),
        "@tabler/icons-webfont/tabler-icons.min.css",
        join(currentDir, "./tailwind/all.css")
    ]
})
