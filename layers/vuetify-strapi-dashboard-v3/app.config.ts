import {defineAppConfig} from "#app";
import VuetifyStrapiDashboardConfig = VSD.VuetifyStrapiDashboardConfig;

const Provinces: never[] = [];

export default defineAppConfig({
    vsd: <VuetifyStrapiDashboardConfig>{
        description: "meta description",
        keywords: "meta keywords",
        title: "vuetify strapi dashboard",
        singularTitle: "VSD",
        footerTitle: "VSD",
        systemLogo: '/system-logo.png # top of layout',
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/local',
        showUser: false,
        menu:
            {
                navbar: [
                    {title: 'home', icon: 'home', link: '/', target: '_blank'},
                    {
                        title: 'example', icon: 'add', items: [
                            {title: 'all', permission: "example.find", icon: 'link', link: '/admin/example'},
                            {title: 'new', permission: "example.create", icon: 'link', link: '/admin/example/create'}
                        ]
                    }
                ],
                drawer: [
                    {
                        title: 'Commerce',
                        icon: 'mdi-shopping',
                        items: [
                            {
                                title: 'Products',
                                icon: 'mdi-package-variant-plus'
                            },
                            {
                                title: 'Attribute Groups',
                                icon: 'mdi-table-row-plus-before'
                            },
                            {
                                title: 'Attributes',
                                icon: 'mdi-tune-variant'
                            },
                            {
                                title: 'Categories',
                                icon: 'mdi-shape'
                            },
                            {
                                title: 'Brands',
                                icon: 'mdi-watermark'
                            },
                            {
                                title: 'Collection',
                                icon: 'mdi-bookmark-box-multiple-outline'
                            },
                            {
                                title: 'Orders',
                                icon: 'mdi-basket-fill'
                            },
                            {
                                title: 'Prices',
                                icon: 'mdi-abacus'
                            },
                            {
                                title: 'Payment Methods',
                                icon: 'mdi-cash-register'
                            },
                            {
                                title: 'Currencies',
                                icon: 'mdi-currency-usd'
                            },
                        ]
                    },
                    {
                        title: 'CRM',
                        icon: 'mdi-contacts',
                        items: [
                            {
                                title: 'Customers',
                                icon: 'mdi-account-box-multiple',
                            },
                            {
                                title: 'Tickets',
                                icon: 'mdi-face-agent',
                            },
                            {
                                title: 'Wallets',
                                icon: 'mdi-account-cash',
                            },
                            {
                                title: 'Contacts',
                                icon: 'mdi-contacts'
                            },
                            {
                                title: 'Carts',
                                icon: 'mdi-basket'
                            },
                            {
                                title: 'Coupons',
                                icon: 'mdi-wallet-giftcard'
                            },
                            {
                                title: 'Wishlist',
                                icon: 'mdi-bookmark'
                            },
                            {
                                title: 'Invoices',
                                icon: 'mdi-receipt-text'
                            },
                            {
                                title: 'Transactions',
                                icon: 'mdi-cash-fast'
                            },
                        ]
                    },
                    {
                        title: 'Organization',
                        icon: 'mdi-store',
                        items: [
                            {
                                title: 'Companies',
                                icon: 'mdi-image-frame'

                            },
                            {
                                title: 'Stores',
                                icon: 'mdi-image-frame'

                            },
                            {
                                title: 'Sellers',
                                icon: 'mdi-image-frame'

                            },
                            {
                                title: 'Banners',
                                icon: 'mdi-image-frame'

                            },
                            {
                                title: 'Catalogues',
                                icon: 'mdi-puzzle'
                            },
                            {
                                title: 'Landing Pages',
                                icon: 'mdi-view-list'

                            },
                            {
                                title: 'Pages',
                                icon: 'mdi-note-text'

                            },
                            {
                                title: 'Zones',
                                icon: 'mdi-map-legend'
                            }
                        ]
                    },
                    {
                        title: 'Inventory',
                        icon: 'mdi-human-dolly',
                        items: [
                            {
                                title: 'Warehouses',
                                icon: 'mdi-warehouse'
                            },
                            {
                                title: 'Vendors',
                                icon: 'mdi-factory'
                            },
                            {
                                title: 'Adjustments',
                                icon: 'mdi-book-edit'
                            },
                            {
                                title: 'Shipping Methods',
                                icon: 'mdi-truck-delivery'
                            },
                            {
                                title: 'Packages',
                                icon: 'mdi-package'
                            },
                            {
                                title: 'Carriers',
                                icon: 'mdi-account-tie'
                            }
                        ]
                    },
                    {
                        title: 'Reports',
                        icon: 'mdi-chart-line',
                        items: [
                            {
                                title: 'Sales',
                                icon: 'mdi-warehouse'
                            },
                        ]
                    },
                    {
                        title: 'System',
                        icon: 'mdi-cogs',
                        items: [
                            {
                                title: 'Users',
                                icon: 'mdi-account-multiple-outline',
                                to: '/admin/system/users'
                            },
                            {
                                title: 'Roles',
                                icon: 'mdi-account-settings',
                                to: '/admin/system/roles'
                            },
                            {
                                title: 'Logs',
                                icon: 'mdi-history',
                                to: '/admin/system/logs'
                            }
                        ]
                    }
                ],
                panelDashboard: [],
                footerLinks: []
            }
    }
})