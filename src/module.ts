import {
    defineNuxtModule,
    installModule,
    addTemplate,
    addPlugin,
    useModuleContainer,
    addAutoImportDir,
    addAutoImport,
    addComponentsDir,
    addPluginTemplate,
    isNuxt2,
    isNuxt3,
    resolvePath, addComponent
} from '@nuxt/kit'
import {fileURLToPath} from 'node:url'
import {ScanDir} from '@nuxt/schema';

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
            // Add ./components dir to the list
            dirs.push({
                path: fileURLToPath(new URL('./components', import.meta.url))
            })
        }
    },
    async setup(moduleOptions, nuxt) {
        const moduleContainer = useModuleContainer();

        await installModule('@nuxtjs/tailwindcss')

        await addPlugin({
            src: await resolvePath(__dirname + '/plugins/NtmPlugin.ts'),
        })

        await moduleContainer.addLayout(
            {
                fileName: "NtmPanel.vue",
                src: await resolvePath(__dirname + '/layouts/NtmPanel.vue'),
            }, "ntm-panel"
        )

        await addTemplate({
            fileName: "layouts/NtmMarket.vue",
            src: await resolvePath(__dirname + '/layouts/NtmMarket.vue'),
        })

        nuxt.hook('app:created', async () => {
            console.log('app:created')
            await moduleContainer.addLayout(
                {
                    filename: "layouts/NtmMarket.vue",
                    src: await resolvePath(__dirname + '/layouts/NtmMarket.vue'),
                }, "ntm-market"
            )
        })
    }
});
