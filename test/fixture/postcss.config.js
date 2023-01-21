plugins = process.env.MODULE_DEV == 'digimarket_dev' ? require('../../tailwind/src/postcss.config') : [
    'postcss-partial-import',
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-nested',
    'tailwindcss/nesting',
    'postcss-import-ext-glob',
];

module.exports = {
    plugins: plugins
}
