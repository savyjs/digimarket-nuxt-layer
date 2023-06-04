import {defineAppConfig} from "#app";

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
    digimarket: {
        logo: '/assets/dkala/logo.svg',
        title: 'Title Here',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'premium account', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'my activity', svg: 'list', link: '/profile/activity'},
            {icon: 'fa fa-list', text: 'orders', svg: 'order', link: '/profile/orders'},
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
    }
})