plugins = process.env.MODULE_DEV == 'digimarket_dev' ? require('../../tailwind/src/postcss.config') : [
    'postcss-import-ext-glob',
    'postcss-partial-import',
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-nested',
    'tailwindcss/nesting',
];

module.exports = {
    plugins: plugins
}
