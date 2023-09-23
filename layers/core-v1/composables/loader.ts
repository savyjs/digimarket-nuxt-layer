import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useLoader = defineStore('loader', {
    // a function that returns a fresh state
    state: () => ({
        active: false,
        timeout: 0,
        auth: {
            register: false,
            login: false,
            verify: false,
        }
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        doubleCounter: (state) => state.active
    },
    actions: {
        stop() {
            // `this` is the store instance
            this.active = false
            this.timeout = 0
        },
        start() {
            // `this` is the store instance
            this.active = true
            this.timeout = 120
        },
    },
})