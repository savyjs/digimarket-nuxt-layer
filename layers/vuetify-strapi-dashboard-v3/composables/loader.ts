import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useLoader = defineStore('loader', {
    // a function that returns a fresh state
    state: () => ({
        active: false,
        timeout: 0,
        targets: {} as Partial<{ [key: string]: { active: boolean } }>
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        status: (state) => {
            return (target ?: string) => {
                if (typeof target == 'string' && state?.targets?.[target]?.active) {
                    return !!state?.targets?.[target]?.active
                }
                else return state?.active
            }
        }
    },
    actions: {
        stop(target ?: string) {
            if (typeof target === 'string') {
                this.targets[target] = {active: false}
            } else {
                this.active = false
                this.timeout = 0
            }
        },
        start(target ?: string) {
            // `this` is the store instance
            if (typeof target === 'string') {
                this.targets[target] = {active: true}
            } else {
                this.active = true
                this.timeout = 120
            }
        },
    },
})