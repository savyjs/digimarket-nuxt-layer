const colors = require('tailwindcss/colors')
import {Config} from 'tailwindcss'

export default <Config>{
    content: [
        `../../src/components/**/*.{vue,js}`,
        `../../src/components/market/**/*.{vue,js}`,
        `../../src/components/blog/**/*.{vue,js}`,
        `../../src/layouts/**/*.vue`, `pages/**/*.vue`,
        `../../src/composables/**/*.{js,ts}`,
        `../../src/plugins/**/*.{js,ts}`,
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`, `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
        './node_modules/flowbite/**/*.js',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {
            darkMode: true,
            colors: {
                transparent: 'transparent',
                primary: '#EF4056',
                secondary: '#008eb2',
                error: '#f44336',
                success: '#4caf50',
                alert: '#ff9800',
                dark: '#212121',
                'dark-primary': '#131212',
                'dark-accent': '#343232',
                'light-accent': '#CCC',
                'light': '#EEE',
                gray: colors.gray,
                blue: colors.sky,
                red: colors.rose,
                pink: colors.fuchsia
            },
            fontFamily: {
                sans: ['IRANSans']
            }
        }
    },
    plugins: [
        require('flowbite/plugin'),
        require('tw-elements/dist/plugin')
    ]
}
