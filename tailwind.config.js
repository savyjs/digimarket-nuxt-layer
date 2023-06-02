module.exports = {
    content: [
        './components/**/*.{scss,css,vue,jsx,html}',
        './general/*.{scss,css,vue,jsx,html}',
        `./components/**/*.{vue,js}`,
        `./components/market/**/*.{vue,js}`,
        `./components/blog/**/*.{vue,js}`,
        `./layouts/**/*.vue`,
        `pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `/pages/**/*.vue`,
        `/pages/*.vue`,
        `/components/**/*.{vue,js}`,
        `/layouts/**/*.vue`,
        `/pages/**/*.vue`,
        `/composables/**/*.{js,ts}`,
        `/plugins/**/*.{js,ts}`,
        `/App.{js,ts,vue}`,
        `/app.{js,ts,vue}`
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                secondary: '#008eb2',
                error: '#f44336',
                success: '#1e7c1e',
                alert: '#ff9800',
                dark: '#212121',
                primary: '#a41919',
                accent: '#343232',
                light: '#EEE',
            },
        },
    },
    plugin: "digimarket-kit"
};
