import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
interface Message {
    title?: string;
    type?: string;
    message: string
}

export const useLoader = defineStore('messages', {
    // a function that returns a fresh state
    state: () => ({
        inbox: [] as Array<Message>,
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        newest: (state) => state.inbox.pop(),
        oldest: (state) => state.inbox.shift(),
        all: (state) => state.inbox,
    },
    actions: {
        push(item: Message) {
            // `this` is the store instance
            // const inbox =  as Array<{}>
            if (item?.message) {
                this.inbox.push(item)
            }
        }
    },
})