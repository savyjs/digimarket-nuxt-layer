// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {defineNuxtConfig} from "nuxt/config";

const Provinces = [
    {
        key: '1',
        title: 'آذربایجان شرقی',
    },
    {
        key: '2',
        title: 'آذربایجان غربی',
    },
    {
        key: '3',
        title: 'اردبیل',
    },
    {
        key: '4',
        title: 'اصفهان',
    },
    {
        key: '5',
        title: 'البرز',
    },
    {
        key: '6',
        title: 'ایلام',
    },
    {
        key: '7',
        title: 'بوشهر',
    },
    {
        key: '8',
        title: 'تهران',
    },
    {
        key: '9',
        title: 'چهارمحال و بختیاری',
    },
];

export default defineNuxtConfig({
    css: [
        'assets/font-css/fontiran.css',
        'assets/font-css/style.css'
    ],
    modules: [
        // 'vite-plugin-vue-type-imports/nuxt',
        // Using package name
        // '@nuxt/content',
        // Relative to your project srcDir
        // '@nuxtjs/tailwindcss',
        '~/../../src/module.ts',
        // Providing options
    ],
    ntm: {
        logo: '/assets/dkala/logo.svg',
        title: 'NTM',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'پلاس اکانت', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'خلاصه فعالیت‌ها', svg: 'list', link: '/profile/activity'},
        ],
        divisions: [
            {
                key: '1',
                title: 'Asia',
                items: [{
                    key: "1",
                    title: "Iran",
                    items: Provinces
                }]
            }
        ]
    },
    content: {
        base: '/content'
    }
})
