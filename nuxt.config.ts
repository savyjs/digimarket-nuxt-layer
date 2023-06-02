// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
const Provinces = [];
import {digimarketConfig} from "./schema/types/options";

export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n"
    ],
    alias: {
        "@ntmRoot": dirname(currentDir)
    },
    css: [
        join(currentDir, "./assets/styles/ntm.scss")
    ],
    i18n: {
        vueI18n: join(currentDir, "./i18n.config.ts")
    }
})
