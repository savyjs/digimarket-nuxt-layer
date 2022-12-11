
export default defineNuxtConfig({
    extends: 'content-wind',
    content: {
        documentDriven: true,
        highlight: {
            // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
            theme: {
                dark: 'github-dark',
                default: 'dracula'
            }
        }
    }
})