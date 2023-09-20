import {defineNuxtConfig} from "nuxt/config";
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
const Provinces = [];

export default defineNuxtConfig({
    // This is the list of available modules
    extends: [
        "layers/core-v1",
        // "layers/auth-v1",
        "layers/commerce-v1",
        // "layers/inventory-v1",
        // "layers/blog-v1",
        // "layers/vuetify-strapi-dashboard-v3",
    ],
    modules: [
        // "@nuxtjs/tailwindcss",
        '@nuxtjs/strapi'
    ],
    css: [
        // join(currentDir, "./assets/styles/ntm.scss"),
        // join(currentDir, "./tailwind/all.css")
    ],
    // nitro: {
    //     preset: "node"
    // }
})
