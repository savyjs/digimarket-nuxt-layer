import {join, dirname} from "path";
import {fileURLToPath} from 'url'
import {defineI18nConfig} from ".nuxt/imports";

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    langDir: join(currentDir, './lang'),
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
}))