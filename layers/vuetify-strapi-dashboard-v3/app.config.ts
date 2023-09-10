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
        systemLogo: '/system-logo.png # top of layout',
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/local',
        showUser: false,
        menu:
            {
                navbar: [],
                drawer: [],
                panelDashboard: [],
                footerLinks: []
            }
    }
})