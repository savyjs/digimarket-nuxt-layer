export global {
    export declare namespace VSD {
        interface VuetifyStrapiDashboardConfig {
            version?: string | number;
            rtlDictionary?: {};
            rtl?: boolean;
            lang?: string;
            description?: string;
            keywords?: string;
            title?: string;
            singularTitle?: string;
            footerTitle?: string;
            systemLogo?: string;
            loader?: boolean;
            enable2fa?: boolean;
            splash?: boolean;
            recaptchaKey?: string;
            loginUrl?: string;
            showUser?: boolean;
            menu?: {
                navbar?: MenuItem[];
                drawer?: MenuItem[];
                panelDashboard?: MenuItem[];
                footerLinks?: MenuItem[];
                panelDrawer?: MenuItem[];
                panelTopMenu?: MenuItem[];
            }
        }

        interface MenuItem {
            title?: string;
            icon?: string;
            to?: string;
            role?: string;
            permission?: string;
            link?: string;
            target?: string;
            items?: MenuItem[]
        }
    }
}