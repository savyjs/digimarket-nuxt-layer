module.exports = {
    content: [
        './components/*.{vue,jsx,html}',
        './components/**/*.{vue,jsx,html}',
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
                dark: 'var(--color-dark-bg)',
                light: 'var(--color-bg)',
                transparent: 'transparent',
                secondary: '#008eb2',
                error: '#f44336',
                success: '#1e7c1e',
                warning: '#e0a107',
                primary: '#a41919',
                accent: '#343232',
            },
        },
    }
};
