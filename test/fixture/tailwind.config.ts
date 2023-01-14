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
    plugins: [
        require('flowbite/plugin'),
        require('tw-elements/dist/plugin'),
        require('../../tailwind/index')
    ]
}
