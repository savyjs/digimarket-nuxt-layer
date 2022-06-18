import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    modules: [
        // Using package name
        '~/../../src',
    ],
    content: {
        base: '/content'
    }
})
