import {
    defineNuxtModule,
    installModule,
    addTemplate,
    addPlugin,
    useModuleContainer,
    addComponentsDir,
    addPluginTemplate,
    isNuxt2,
    isNuxt3,
    resolvePath
} from '@nuxt/kit'

export default defineNuxtModule({
    async setup(moduleOptions, nuxt = {}) {
        const moduleContainer = useModuleContainer(nuxt);
        if (isNuxt2()) {

        } else if (isNuxt3()) {
            await installModule('@nuxtjs/tailwindcss')

            await addTemplate({
                fileName: "component/NtmHeader.vue",
                src: await resolvePath(__dirname + '/nuxt3/component/NtmHeader.vue'),
            })

            await addComponentsDir(await resolvePath(__dirname + '/nuxt3/component'));

            await addTemplate({
                fileName: "NtmPlugin",
                src: await resolvePath(__dirname + '/nuxt3/plugin/NtmPlugin.ts'),
            })

            await addTemplate({
                fileName: "NtmPanel.vue",
                src: await resolvePath(__dirname + '/nuxt3/layout/NtmPanel.vue'),
            })

            await moduleContainer.addLayout({
                name: "NtmPanel",
                src: await resolvePath(__dirname + '/nuxt3/layout/NtmPanel.vue'),
            })
        }
    }
});
