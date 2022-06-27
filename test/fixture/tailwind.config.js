const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        `components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`, `composables/**/*.{js,ts}`, `plugins/**/*.{js,ts}`, `App.{js,ts,vue}`, `app.{js,ts,vue}`,
        './node_modules/flowbite/**/*.js'
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
