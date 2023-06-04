
# NTM (Nuxt3 Tailwind Marketplace Kit)

this is a layer for nuxt app

## usage 
first, install from NPM
```shell
npm i digimarket-nuxt-layer
```


then, in nuxt.config.ts
```ts
export default defineNuxtConfig({
    extends: [
        "digimarket-nuxt-module"
    ]
})
```

in App.config.ts
```ts 
export default defineAppConfig({
    digimarket: {
        logo: '/assets/dkala/logo.svg',
        title: 'Title Here',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'premium account', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'my activity', svg: 'list', link: '/profile/activity'},
            {icon: 'fa fa-list', text: 'orders', svg: 'order', link: '/profile/orders'},
        ],
        divisions: [
            {
                key: '1',
                title: 'Asia',
                items: [{
                    key: "1",
                    title: "US",
                    items: Provinces
                }]
            }
        ]
    }
})
```

## documentation (alpha version)

- [Install And Usage Guide](https://digimarket.savyjs.com)

## build online markets with tailwind css faster



## link-tree

- Document : [Digimarket - Install And Usage Guide](https://digimarket.savyjs.com) [ [(Repository)](https://github.com/savyjs/digimarket)  ]
- Kit for Tailwind (Repository):  [savyjs/digimarket-tailwind](https://github.com/savyjs/digimarket-tailwind)
- Nuxt Layer (Repository): [savyjs/digimarket-nuxt-module](https://github.com/savyjs/digimarket-nuxt-module)
- Nuxt 3 Fixture:  [Digimarket - Demo and Pages](https://diginuxt.savyjs.com) [ [(Repository)](https://github.com/savyjs/digimarket-nuxt)  ]
