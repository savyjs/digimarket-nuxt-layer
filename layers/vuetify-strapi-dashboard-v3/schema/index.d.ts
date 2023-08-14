export global {
    export declare namespace VSD {
        interface VuetifyStrapiDashboardConfig {
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
                adminDrawer?: MenuItem[];
                panelDashboard?: MenuItem[];
                footerLinks?: MenuItem[];
                panelDrawer?: MenuItem[];
                panelTopMenu?: MenuItem[];
            }
        }

        interface MenuItem {
            title?: string;
            icon?: string;
            link?: string;
            target?: string;
            items?: MenuItem[]
        }
    }
}