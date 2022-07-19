import {
    defineNuxtModule,
    installModule,
    addTemplate,
    addAutoImportDir,
    addComponentsDir,
    addPlugin,
    extendPages,
    useNuxt,
    addServerHandler,
    useModuleContainer,
    resolvePath, addComponent
} from '@nuxt/kit'
import consola from 'consola'
import {Layout} from "./schema/types/layout";
import {divisions} from "./schema/types/options";

const logger = consola.withScope('nuxt:ntm')


export interface ModuleOptions extends Layout {
    divisions?: divisions[]
}

export default defineNuxtModule<ModuleOptions>({
    defaults: {
        logo: '~ntmRoot/img/logo.png',
        title: undefined,
        divisions: []
    },
    meta: {
        // Usually  npm package name of your module
        name: 'ntm',
        // The key in `nuxt.config` that holds your module options
        configKey: 'ntm',
        // Compatibility constraints
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.0.0'
        }
    },
    async setup(moduleOptions, nuxt) {
        const moduleContainer = useModuleContainer(nuxt);

        // installing tailwindcss first
        await installModule('@nuxtjs/tailwindcss')
        await installModule('vite-plugin-vue-type-imports/nuxt')
        nuxt.options.runtimeConfig.public.ntm = moduleOptions;
        nuxt.options.nitro.rootDir = await resolvePath(__dirname + '/')
        nuxt.options.nitro.srcDir = await resolvePath(__dirname + '/')
        nuxt.options.nitro.scanDirs = [await resolvePath(__dirname + '/server')]

        nuxt.hook('ready', async nuxt => {
            nuxt.options.alias['ntmRoot'] = await resolvePath(__dirname);
            nuxt.options.alias['@ntmRoot'] = await resolvePath(__dirname);
            nuxt.options.css.push(await resolvePath(__dirname + '/assets/styles/ntm.scss'))
            nuxt.options.css.push('https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css')
            nuxt.options.css.push('https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css')
            nuxt.options.app.head.script.push({src: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.js'})
            nuxt.options.app.head.script.push({src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'})

        })

        //
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market/logistic')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market/products')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market/categories')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market/landing')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market/layout')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/market')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components/blog')})
        await addComponentsDir({path: await resolvePath(__dirname + '/components')})

        await addAutoImportDir([await resolvePath(__dirname + '/public'), await resolvePath(__dirname + '/assets'), await resolvePath(__dirname + '/composables'), await resolvePath(__dirname + '/components')])

        // addServerHandler({handler: await resolvePath(__dirname + '/server/api/market/product/[id].ts')})

        await moduleContainer.addLayout(
            {
                filename: "NtmMarket.vue",
                src: await resolvePath(__dirname + '/layouts/NtmMarket.vue'),
            }, "NtmMarket"
        )

        await moduleContainer.addLayout(
            {
                filename: "NtmPanel.vue",
                src: await resolvePath(__dirname + '/layouts/NtmPanel.vue'),
            }, "NtmPanel"
        )
        await moduleContainer.addLayout(
            {
                filename: "NtmMarketPayment.vue",
                src: await resolvePath(__dirname + '/layouts/NtmMarketPayment.vue'),
            }, "NtmMarketPayment"
        )
        await moduleContainer.addLayout(
            {
                filename: "NtmMarketShipping.vue",
                src: await resolvePath(__dirname + '/layouts/NtmMarketShipping.vue'),
            }, "NtmMarketShipping"
        )
    }
});
