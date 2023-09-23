import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
interface Message {
    title?: string;
    type?: string;
    message: string;
    target?: string;
}

export const useMessages = defineStore('messages', {
    // a function that returns a fresh state
    state: () => ({
        inbox: [] as Array<Message>,
        archive: [] as Array<Message>
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        newest: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target
                    }).pop()
                }
                return state.inbox.pop()
            }
        },
        oldest: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target
                    }).shift()
                }
                return state.inbox.shift()
            }
        },
        all: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target
                    })
                }
                return state.inbox
            }
        }
    },
    actions: {
        pushMessage(item: Message) {
            // `this` is the store instance
            // const inbox =  as Array<{}>
            if (item?.message) {
                this.inbox.push(item)
            } else {
                console.warn('Message is not vaild.', item)
            }
        }
    },
})