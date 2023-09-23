import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
interface Message {
    id?: string | number;
    title?: string;
    seen?: boolean;
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
                if (target?.length) {
                    return state.inbox.filter((item) => {
                        return item.target == target && item.seen
                    })?.slice(-1)
                }
                return state.inbox?.filter((item) => item.seen)?.slice(-1)
            }
        },
        oldest: (state) => {
            return (target?: string) => {
                if (target?.length) {
                    return state.inbox.filter((item) => {
                        return item.target == target && item.seen
                    })?.[0]
                }
                return state.inbox?.filter((item) => item.seen)?.[0]
            }
        },
        unread: (state) => {
            return (target?: string) => {
                if (target?.length) {
                    return state.inbox.filter((item) => {
                        return item.target == target && item.seen
                    })
                }
                return state.inbox?.filter((item) => item.seen)
            }
        },
        all: (state) => {
            return (target?: string) => {
                if (target?.length) {
                    return state.inbox.filter((item) => {
                        return item.target == target
                    })
                }
                return state.inbox
            }
        },
        count: (state) => {
            return (target?: string) => {
                if (target?.length) {
                    return state.inbox.filter((item) => {
                        return item.target == target && item.seen
                    }).length
                }
                return state.inbox?.filter((item) => item.seen)?.length
            }
        },
    },
    actions: {
        read(identifier: Message | number) {
            this.inbox.filter(item => {
                if (!item.seen) return false
                if (typeof identifier == 'number') return identifier == item?.id
                return identifier?.id == item?.id
            }).map(item => {
                item.seen = true;
                return item;
            })
        },
        readAll(target?: string) {
            this.inbox.filter(item => {
                if (!item.seen) return false
                if (typeof target == 'string') return item.target == target
                return true;
            }).map(item => {
                item.seen = true;
                return item;
            })
        },
        pushMessage(item: Message) {
            // `this` is the store instance
            // const inbox =  as Array<{}>
            if (item?.message) {
                item.id = Date.now() + this.count()
                this.inbox.push(item)
            } else {
                console.warn('Message is not valid.', item)
            }
        }
    },
})