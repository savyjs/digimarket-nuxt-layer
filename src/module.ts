import {
    defineNuxtModule,
    installModule,
    addPlugin,
    addLayout,
    resolvePath,
    addComponentsDir,
    useLogger,
    createResolver, addImportsDir,
} from "@nuxt/kit";

import {Layout} from "./runtime/schema/types/layout";
import {divisions} from "./runtime/schema/types/options";

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

        const {resolve} = createResolver(import.meta.url)

        nuxt.hook('i18n:registerModule', register => {
            register({
                // langDir path needs to be resolved
                langDir: resolve('./runtime/lang'),
                locales: [
                    {
                        code: 'en',
                        file: 'en.json',
                    },
                    {
                        code: 'fa',
                        file: 'fa.json',
                    },
                ]
            })
        })

        // add NTM alias and load ntm style
        nuxt.hook("ready", async (nuxt) => {
            nuxt.options.alias["@ntmRoot"] = await resolvePath(__dirname);
            nuxt.options.vite.server.fs.allow.push(__dirname)
            nuxt.options.vite.server.fs.allow.push(__dirname + '/..')
            nuxt.options.css.push(
                "@ntmRoot/runtime/assets/styles/ntm.scss"
            );
        });

        // add composables
        addImportsDir(resolve(__dirname + '/runtime/composables'))

        // add plugins
        addPlugin({
            src: await resolvePath(__dirname + "/runtime/plugins/NtmPlugin.client.ts"),
        });
        addPlugin({
            src: await resolvePath(__dirname + "/runtime/plugins/NtmAssets.client.js"),
            mode: "client",
        });

        // load NTM components
        await addComponentsDir({path: __dirname + "/runtime/components/user"});
        await addComponentsDir({path: __dirname + "/runtime/components/market"});
        await addComponentsDir({path: __dirname + "/runtime/components/blog"});
        await addComponentsDir({path: __dirname + "/runtime/components"});

        // adding layouts - ntm market default page
        await addLayout(
            {
                filename: "NtmMarket.vue",
                src: await resolvePath(__dirname + "/runtime/layouts/NtmMarket.vue"),
            },
            "NtmMarket"
        );

        // user panel layout
        await addLayout(
            {
                filename: "NtmPanel.vue",
                src: await resolvePath(__dirname + "/runtime/layouts/NtmPanel.vue"),
            },
            "NtmPanel"
        );

        // add payment page
        await addLayout(
            {
                filename: "NtmMarketPayment.vue",
                src: await resolvePath(__dirname + "/runtime/layouts/NtmMarketPayment.vue"),
            },
            "NtmMarketPayment"
        );

        // cart and shipping layouts
        await addLayout(
            {
                filename: "NtmMarketShipping.vue",
                src: await resolvePath(__dirname + "/runtime/layouts/NtmMarketShipping.vue"),
            },
            "NtmMarketShipping"
        );
    },
});
