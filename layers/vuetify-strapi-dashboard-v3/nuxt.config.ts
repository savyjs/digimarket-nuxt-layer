export default defineNuxtConfig({
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    }
})