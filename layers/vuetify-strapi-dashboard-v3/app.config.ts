import VuetifyStrapiDashboardConfig = VSD.VuetifyStrapiDashboardConfig;

const Provinces: never[] = [];

export default defineAppConfig({
    vsd: <VuetifyStrapiDashboardConfig>{
        version: "Development-alpha",
        description: "meta description",
        keywords: "meta keywords",
        title: process?.env?.ORG_NAME ?? "vuetify strapi dashboard",
        singularTitle: process?.env?.ORG_NAME ?? "VSD",
        footerTitle: process?.env?.ORG_NAME ?? "VSD",
        systemLogo: undefined,
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/login',
        showUser: false,
        darkmodeToggleBtn: true,
        i18n: {},
        menu:
            {
                navbar: [],
                drawer: [],
                panelDashboard: [],
                footerLinks: []
            }
    },
    authRouting: {
        login: '/auth/login',
        register: '/auth/register',
        verify: '/auth/verify',
        forgot: '/auth/forgot',
        home: '/',
        profile: '/admin',
        admin: '/admin'
    }
})