import {
    defineNuxtModule,
    installModule,
    addTemplate,
    addAutoImportDir,
    addPlugin,
    useModuleContainer,
    resolvePath, addComponent
} from '@nuxt/kit'
import {fileURLToPath} from 'node:url'
import consola from 'consola'

const logger = consola.withScope('nuxt:ntm')

export default defineNuxtModule({
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
    defaults: {},
    hooks: {
        'components:dirs'(dirs) {
            dirs.push(...[{
                path: fileURLToPath(new URL('./components', import.meta.url)),
                global: true
            }, {
                path: fileURLToPath(new URL('./components/blog', import.meta.url)),
                global: true
            }, {
                path: fileURLToPath(new URL('./components/market', import.meta.url)),
                global: true
            }, {
                path: fileURLToPath(new URL('./components/market/header', import.meta.url)),
                global: true
            }])
            console.log(fileURLToPath(new URL('./components', import.meta.url)), {dirs});
        }
    },
    async setup(moduleOptions, nuxt) {
        const moduleContainer = useModuleContainer();

        await installModule('@nuxtjs/tailwindcss')

        nuxt.hook('ready', async nuxt => {
            nuxt.options.css.push(await resolvePath(__dirname + '/assets/styles/ntm.scss'))
        })

        addPlugin({
            src: await resolvePath(__dirname + '/plugins/NtmPlugin.ts'),
        })

        await addAutoImportDir([await resolvePath(__dirname + '/static'), await resolvePath(__dirname + '/assets')])

        await moduleContainer.addLayout(
            {
                write: true,
                filename: "../layouts/NtmMarket.vue",
                src: await resolvePath(__dirname + '/layouts/NtmMarket.vue'),
            }, "NtmMarket"
        )

        await moduleContainer.addLayout(
            {
                write: true,
                filename: "../layouts/NtmPanel.vue",
                src: await resolvePath(__dirname + '/layouts/NtmPanel.vue'),
            }, "NtmPanel"
        )
    }
});
