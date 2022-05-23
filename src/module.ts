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
    resolvePath
} from '@nuxt/kit'
import {ScanDir} from '@nuxt/schema';

export default defineNuxtModule({
    async setup(moduleOptions, nuxt) {
        const moduleContainer = useModuleContainer(nuxt);
        if (isNuxt2()) {

        } else if (isNuxt3()) {
            await installModule('@nuxtjs/tailwindcss')

            let result = await addComponentsDir({path: __dirname + '/nuxt3', watch: true})
            console.log({result});
            await addTemplate({
                fileName: "component/NtmHeader.vue",
                src: await resolvePath(__dirname + '/nuxt3/component/NtmHeader.vue'),
            })
            await addTemplate({
                fileName: "NtmPlugin",
                src: await resolvePath(__dirname + '/nuxt3/plugin/NtmPlugin.ts'),
            })

            await moduleContainer.addLayout(
                addTemplate({
                    fileName: "nuxt3/layout/NtmPanel.vue",
                    src: await resolvePath(__dirname + '/nuxt3/layout/NtmPanel.vue'),
                }), "NtmPanel"
            )

            await moduleContainer.addLayout(
                addTemplate({
                    fileName: "nuxt3/layout/NtmMarket.vue",
                    src: await resolvePath(__dirname + '/nuxt3/layout/NtmMarket.vue'),
                }), "NtmMarket"
            )
        }
    }
});
