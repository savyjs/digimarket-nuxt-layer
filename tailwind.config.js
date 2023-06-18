module.exports = {
    content: [
        './components/*.{scss,css,vue,jsx,html}',
        './components/**/*.{scss,css,vue,jsx,html}',
        './general/*.{scss,css,vue,jsx,html}',
        `./layouts/*.vue`,
        `./layouts/**/*.vue`,
        `./pages/*.vue`,
        `./pages/**/*.vue`,
        `./composables/*.{js,ts}`,
        `./composables/**/*.{js,ts}`,
        `./plugins/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                secondary: '#008eb2',
                error: '#f44336',
                success: '#1e7c1e',
                warning: '#e0a107',
                dark: '#28272A',
                primary: '#a41919',
                accent: '#343232',
                light: '#EEE',
            },
        },
    }
};
