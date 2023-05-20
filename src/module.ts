import {
    defineNuxtModule,
    installModule,
    addPlugin,
    addLayout,
    resolvePath,
    addComponentsDir,
    useLogger,
} from "@nuxt/kit";


import {Layout} from "./schema/types/layout";
import {divisions} from "./schema/types/options";
import I18nConfig from "./i18n.config";

const logger = useLogger('nuxt:ntm')

export interface ModuleOptions extends Layout {
    divisions?: divisions[];
    profileMenuItems?: { title: string; to: string; icon?: string }[];
}

export default defineNuxtModule<ModuleOptions>({
    defaults: {
        logo: "@ntmRoot/img/logo.png",
        title: undefined,
        divisions: [],
        profileMenuItems: [],
    },
    meta: {
        // Usually  npm package name of your module
        name: "digimarket-nuxt-module",
        // The key in `nuxt.config` that holds your module options
        configKey: "digimarket",
        // Compatibility constraints
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: "^3.0.0",
        },
    },
    async setup(moduleOptions, nuxt) {
        logger.success(`Digimarket Nuxt Module Started!`)

        // installing tailwindcss
        await installModule("@nuxtjs/tailwindcss");

        try {
            await installModule("@nuxtjs/i18n", I18nConfig);
            logger.success(`I18n is ok`)
        } catch (err) {
            logger.error("i18n error!", err)
        }

        // add NTM alias and load ntm style
        nuxt.hook("ready", async (nuxt) => {
            nuxt.options.alias["@ntmRoot"] = await resolvePath(__dirname);
            nuxt.options.vite.server.fs.allow.push(__dirname)
            nuxt.options.vite.server.fs.allow.push('..')
            nuxt.options.css.push(
                "@ntmRoot/assets/styles/ntm.scss"
            );
        });

        // add plugins
        addPlugin({
            src: await resolvePath(__dirname + "/plugins/NtmPlugin.client.ts"),
        });
        addPlugin({
            src: await resolvePath(__dirname + "/plugins/NtmAssets.client.js"),
            mode: "client",
        });

        // load NTM components
        await addComponentsDir({path: __dirname + "/components/user"});
        await addComponentsDir({path: __dirname + "/components/market"});
        await addComponentsDir({path: __dirname + "/components/blog"});
        await addComponentsDir({path: __dirname + "/components"});

        // adding layouts - ntm market default page
        await addLayout(
            {
                filename: "NtmMarket.vue",
                src: await resolvePath(__dirname + "/layouts/NtmMarket.vue"),
            },
            "NtmMarket"
        );

        // user panel layout
        await addLayout(
            {
                filename: "NtmPanel.vue",
                src: await resolvePath(__dirname + "/layouts/NtmPanel.vue"),
            },
            "NtmPanel"
        );

        // add payment page
        await addLayout(
            {
                filename: "NtmMarketPayment.vue",
                src: await resolvePath(__dirname + "/layouts/NtmMarketPayment.vue"),
            },
            "NtmMarketPayment"
        );

        // cart and shipping layouts
        await addLayout(
            {
                filename: "NtmMarketShipping.vue",
                src: await resolvePath(__dirname + "/layouts/NtmMarketShipping.vue"),
            },
            "NtmMarketShipping"
        );
    },
});
