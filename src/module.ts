import {
    defineNuxtModule,
    installModule,
    addTemplate,
    addPlugin,
    useModuleContainer,
    addAutoImportDir,
    addComponentsDir,
    addPluginTemplate,
    isNuxt2,
    isNuxt3,
    resolvePath, addComponent
} from '@nuxt/kit'
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
    hooks: {},
    async setup(moduleOptions, nuxt) {
        const moduleContainer = useModuleContainer(nuxt);

        await installModule('@nuxtjs/tailwindcss')

        await addComponentsDir({
            path: await resolvePath((__dirname + '/components'))
        })

        await addComponentsDir({
            path: await resolvePath((__dirname + '/components/blog'))
        })

        await addPlugin({
            src: await resolvePath(__dirname + '/plugins/NtmPlugin.ts'),
        })

        await moduleContainer.addLayout(
            {
                fileName: "NtmPanel.vue",
                src: await resolvePath(__dirname + '/layouts/NtmPanel.vue'),
            }, "NtmPanel"
        )
        await addTemplate({
            filename: "layouts/ntmmarket.vue",
            src: await resolvePath(__dirname + '/layouts/ntmmarket.vue'),
        })

        await moduleContainer.addLayout(
            {
                filename: "layouts/ntmmarket.vue",
                src: await resolvePath(__dirname + '/layouts/ntmmarket.vue'),
            }, "ntmmarket"
        )
    }
});
