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
                link: 'var(--color-link)',
                dark: 'var(--color-dark)',
                light: 'var(--color-light)',
                transparent: 'transparent',
                primary: '#a41919',
                info: '#0d5fe8',
                error: '#b40b00',
                success: '#1e7c1e',
                warning: '#e0a107',
            },
        },
    }
};
