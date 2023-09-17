import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    css: [
        //join(currentDir, "./assets/styles/ntm.scss"),
        "@tabler/icons-webfont/tabler-icons.min.css",
        join(currentDir, "./tailwind/all.css")
    ]
})
