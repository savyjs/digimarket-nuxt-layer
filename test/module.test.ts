import {fileURLToPath} from 'node:url'
import {describe, expect, it} from 'vitest'
import {setup, $fetch, fetch, isDev} from '@nuxt/test-utils'

await setup({
    rootDir: fileURLToPath(new URL('./fixture', import.meta.url)),
    server: true
})

describe('Module Test', async () => {


    it('test API', async () => {
        // Get response to a server-rendered page with `$fetch`.
        const response = await $fetch('/api/items')
        expect(response).toMatchObject({pageview: expect.any(Number)})
    })

    it('Renders Hello world!', async () => {
        expect(await $fetch('/')).toContain('Hello world!')
    })

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})

describe('layouts', () => {
    it('should apply NtmMarket layout', async () => {
        const html = await $fetch('/market')

        expect(html).toContain('ntm-market.vue')
    })
})