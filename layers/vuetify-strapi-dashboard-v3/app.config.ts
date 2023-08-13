import {defineAppConfig} from "#app";
import {DigimarketConfig} from "~/schema/options";

const Provinces: never[] = [];

export default defineAppConfig({
    vsd: {
        description: "meta description",
        keywords: "meta keywords",
        title: "vuetify strapi dashboard",
        signleTitle: "VSD",
        footerTitle: "VSD",
        systemLogo: '/system-logo.png # top of menu',
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/local',
        showUser: false,
    }
})