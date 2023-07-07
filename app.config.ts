import {defineAppConfig} from "#app";
import {DigimarketConfig} from "~/schema/types/options";

const Provinces: never[] = [];

export default defineAppConfig({
    digimarket: <DigimarketConfig><unknown>{
        rtlDictionary: {
            en: false,
            fa: true
        },
        lang: 'en',
        rtl: false,
        logo: '/logo.png',
        title: 'ntm.title',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'Premium Account', svg: 'plus', link: '/v1/profile/plus'},
            {icon: 'fa fa-list', text: 'My Activity', svg: 'list', link: '/v1/profile/activity'},
            {icon: 'fa fa-list', text: 'Orders', svg: 'order', link: '/v1/profile/orders'},
        ],
        divisions: [
            {
                key: '1',
                title: 'America',
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