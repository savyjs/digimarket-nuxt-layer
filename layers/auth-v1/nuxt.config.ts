import {defineNuxtConfig} from "nuxt/config";
import dotenv from "dotenv"
const schemaList = ['ntm', 'vsd'];
dotenv.config()
const schemaName = process?.env?.AUTH_SCHEMA ?? 'ntm' //other options is vsd

if(!schemaList.includes(schemaName)) console.warn(`The chosen schema is wrong, there is no schema with this name: ${schemaName}`)
else console.info(`The chosen schema is ${schemaName}`);

export default defineNuxtConfig({
    extends: [
        `layers/${schemaName}`
    ]
})