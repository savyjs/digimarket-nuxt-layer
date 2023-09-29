import {defineNuxtConfig} from "nuxt/config";

const schemaName = process?.env?.auth_schema ?? 'ntm' //other options is vsd

export default defineNuxtConfig({
    extends: [
        `layers/${schemaName}`
    ]
})