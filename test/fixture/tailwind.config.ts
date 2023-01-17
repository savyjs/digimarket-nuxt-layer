const colors = require('tailwindcss/colors')
import {Config} from 'tailwindcss'

const path = process.env.NODE_ENV == 'development' ? '../../tailwind/plugin' : 'digimarket-kit/plugin'
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
        require('digimarket-kit/plugin'),
        // require(path)
    ]
}
