import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    modules: [
        // '@nuxtjs/strapi',
        "@nuxtjs/tailwindcss"
    ],
    css: [
        join(currentDir, "./assets/styles/ntm.scss"),
        join(currentDir, "./tailwind/all.css")
    ]
})
