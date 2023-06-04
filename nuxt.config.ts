import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
const Provinces = [];
import {digimarketConfig} from "./schema/types/options";

export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        // "@nuxtjs/i18n"
    ],
    css: [
        join(currentDir, "./assets/styles/ntm.scss"),
        join(currentDir, "./tailwind/all.css")
    ]
})
