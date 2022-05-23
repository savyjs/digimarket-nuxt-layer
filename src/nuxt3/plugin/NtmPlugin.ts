export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: () => 'world'
        }
    }
})
