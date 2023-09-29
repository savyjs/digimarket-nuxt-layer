import {defineNuxtConfig} from "nuxt/config";

const auth_schema = process?.env?.auth_schema ?? 'ntm' //other options is vsd
const schema_extendable = {
    ntm: ['digimarket-nuxt-layer-core'],
    vsd: ['vuetify-strapi-dashboard'],
}
export default defineNuxtConfig({
    extends: schema_extendable?.[auth_schema || 'ntm']
})