import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
const Provinces = [];

export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        // "@nuxtjs/i18n"
    ],
    css: [
        join(currentDir, "./assets/styles/ntm.scss"),
        join(currentDir, "./tailwind/all.css")
    ],
    nitro:{
        preset: "netlify"
    }
})
