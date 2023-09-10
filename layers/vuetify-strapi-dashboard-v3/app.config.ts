import {defineAppConfig} from "#app";
import VuetifyStrapiDashboardConfig = VSD.VuetifyStrapiDashboardConfig;
import All from "./presets/all";

const Provinces: never[] = [];

export default defineAppConfig({
    vsd: <VuetifyStrapiDashboardConfig>{
        description: "meta description",
        keywords: "meta keywords",
        title: "vuetify strapi dashboard",
        singularTitle: "VSD",
        footerTitle: "VSD",
        systemLogo: undefined,
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/login',
        showUser: false,
        darkmodeToggleBtn: true,
        menu:
            {
                navbar: [],
                drawer: [],
                panelDashboard: [],
                footerLinks: []
            }
    }
})