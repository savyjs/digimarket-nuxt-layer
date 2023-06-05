import {defineAppConfig} from "#app";
import {DigimarketConfig} from "~/schema/types/options";

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

export default defineAppConfig({
    digimarket: <DigimarketConfig>{
        rtlDictionary: {
            en: false,
            fa: true
        },
        lang: 'fa',
        rtl: true,
        logo: '/logo.png',
        title: 'Title Here',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'premium a', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'my activites', svg: 'list', link: '/profile/activity'},
            {icon: 'fa fa-list', text: 'سفارش‌ها', svg: 'order', link: '/profile/orders'},
        ],
        divisions: [
            {
                key: '1',
                title: 'Asia',
                items: [{
                    key: "1",
                    title: "US",
                    items: Provinces
                }]
            }
        ],
        messages: undefined
    }
})