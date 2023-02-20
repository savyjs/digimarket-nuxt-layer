export default {
    title: 'Marketplace Kit for Tailwind',
    description: 'under construction.',
    outDir: '../public',
    cleanUrls: true,
    themeConfig: {
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present SavyJS'
        },
        sidebar: [
            {
                text: 'Guide',
                collapsible: true,
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Install', link: '/guide/install'}
                ]
            },
            {
                text: 'Nuxt',
                collapsible: true,
                items: [
                    {
                        text: 'Guide', link: '/nuxt/config', collapsible: true,

                        items: [
                            {text: 'Install Module', link: '/nuxt/guide/install'},
                            {text: 'Config', link: '/nuxt/guide/config'}
                        ]
                    },
                    {
                        text: 'Pages', link: '/nuxt/pages',
                        items: [
                            {text: 'Profile', link: '/nuxt/pages/profile'},
                            {text: 'Login', link: '/nuxt/pages/login'},
                            {text: 'Register', link: '/nuxt/pages/register'},
                            {text: 'Cart', link: '/nuxt/pages/cart'},
                            {text: 'Shipping', link: '/nuxt/pages/shipping'},
                            {text: 'Payment', link: '/nuxt/pages/payment'},
                            {text: 'Checkout', link: '/nuxt/pages/cart'},
                            {text: 'Product', link: '/nuxt/pages/product'},
                            {text: 'Category', link: '/nuxt/pages/category'},
                            {text: 'Search', link: '/nuxt/pages/search'},
                            {text: 'Landing', link: '/nuxt/pages/landing'},
                        ]
                    },
                    {
                        text: 'Components', link: '/nuxt/components',
                        items: [
                            {text: 'Product Slider', link: '/getting-started'},
                            {text: 'Cart Menu', link: '/getting-started'},
                            {text: 'Search Bar', link: '/getting-started'},
                            {text: 'Header', link: '/getting-started'},
                            {text: 'MegaMenu', link: '/introduction'},
                            {text: 'Toolbar', link: '/getting-started'},
                            {text: 'Footer', link: '/getting-started'},
                        ]
                    }
                ]
            }
        ]
    }
}