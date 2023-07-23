import {defineAppConfig} from "#app";
import {DigimarketConfig} from "~/schema/options";

const Provinces: never[] = [];

export default defineAppConfig({
    digimarket: <DigimarketConfig>{
        commerce: "zoho",
        mode: "state", // api
        zoho: {
            commerce: {
                domain: ""
            }
        },
        rtlDictionary: {
            en: false,
            fa: true
        },
        lang: 'en',
        rtl: false,
        logo: '/logo.png',
        title: 'ntm.title',
        profileMenuItems: [
            {icon: 'fa fa-plus', title: 'Premium Account', svg: 'plus', link: '/v1/profile/plus'},
            {icon: 'fa fa-list', title: 'My Activity', svg: 'list', link: '/v1/profile/activity'},
            {icon: 'fa fa-list', title: 'Orders', svg: 'order', link: '/v1/profile/orders'},
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