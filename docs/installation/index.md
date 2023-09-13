## Installation

### Commerce

Install the following packages first.

```bash
yarn add  digimarket-nuxt-layer-core  digimarket-nuxt-layer-auth digimarket-nuxt-layer-commerce
```

extend layers to your currenct project:

```ts[nuxt.config.ts]
import {defineNuxtConfig} from "nuxt/config";
import {config} from 'dotenv'

config()

export default defineNuxtConfig({
    extends: [
        "digimarket-nuxt-layer-auth",
        "digimarket-nuxt-layer-commerce",
    ],
    strapi: {
        url: process?.env?.STRAPI_URL
    },
    css: []
})
```