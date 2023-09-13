## Installation

### Commerce

Install the following packages first.

```bash
yarn add @nuxtjs/tailwindcss @nuxtjs/strapi  digimarket-nuxt-layer-core  digimarket-nuxt-layer-auth digimarket-nuxt-layer-commerce
```

extend layers to your currenct project:

```ts[nuxt.config.ts]
import {defineNuxtConfig} from "nuxt/config";
import {config} from 'dotenv'

config()

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi'
    ],
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

If you want to make changes in any layer, just go to that folder and run 
```ts
yarn link
```

Then back to your main project and run 

```bash
yarn link package-name 
```

Or for all layers 

```bash
yarn sync
```
