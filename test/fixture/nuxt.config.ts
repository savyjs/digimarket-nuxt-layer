// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {defineNuxtConfig} from "nuxt/config";
import * as process from "process";
import _ from 'lodash';
const modulePath = _.get(process,'env.MODULE_PATH','nuxt-digimarket-kit') // '../../src/module.ts' MODULE_PATH=../../src/module.ts;MODULE_DEV=digimarket_dev;NODE_ENV=development

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
        modulePath,
        // Providing options
    ],
    ntm: {
        logo: '/assets/dkala/logo.svg',
        title: 'NTM',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'پلاس اکانت', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'خلاصه فعالیت‌ها', svg: 'list', link: '/profile/activity'},
            {icon: 'fa fa-list', text: 'سفارش‌ها', svg: 'order', link: '/profile/orders'},
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
