import {fileURLToPath} from 'node:url'
import {describe, expect, it} from 'vitest'
import {setup, $fetch, fetch, isDev} from '@nuxt/test-utils'

describe('Module Test', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('./fixture', import.meta.url)),
        server: true
    })

    it('test API', async () => {
        // Get response to a server-rendered page with `$fetch`.
        const response = await $fetch('/api/items')
        expect(response).toMatchObject({pageview: expect.any(Number)})
    })

    it('Renders Hello Nuxt', async () => {
        expect(await $fetch('/')).toContain('Hello Nuxt!!')
    })

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})
