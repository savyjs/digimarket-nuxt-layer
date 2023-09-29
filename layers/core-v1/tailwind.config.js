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
                transparent: 'transparent',
                primary: {
                    light: '#a41919',
                    DEFAULT: '#a41919',
                    dark: '#f60e81',
                },
                info: {
                    light: '#0d5fe8',
                    DEFAULT: '#0d5fe8',
                    dark: '#0abcf3'
                },
                error: {
                    light: '#b40b00',
                    DEFAULT: '#b40b00',
                    dark: '#fa3131'
                },
                success: {
                    light: '#1e7c1e',
                    DEFAULT: '#1e7c1e',
                    dark: '#07cb07',
                },
                warning: {
                    light: '#e0a107',
                    DEFAULT: '#e0a107',
                    dark: '#ffc331',
                },
            },
        },
    }
};
