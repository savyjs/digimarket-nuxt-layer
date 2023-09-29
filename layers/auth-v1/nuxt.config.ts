import {defineNuxtConfig} from "nuxt/config";
import dotenv from "dotenv"
dotenv.config()
const schemaName = process?.env?.AUTH_SCHEMA ?? 'ntm' //other options is vsd
export default defineNuxtConfig({
    extends: [
        `layers/${schemaName}`
    ]
})