import {defineStore} from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
interface Message {
    id?: string | number;
    title?: string;
    show?: boolean;
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
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target && !item.seen
                    }).slice(-1)?.[0]
                }
                return state.inbox.filter((item) => !item.seen).slice(-1)?.[0]
            }
        },
        oldest: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target && !item.seen
                    })?.[0]
                }
                return state.inbox.filter((item) => !item.seen)?.[0]
            }
        },
        unread: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target && !item.seen
                    })
                }
                return state.inbox.filter((item) => !item.seen)
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
        },
        count: (state) => {
            return (target?: string) => {
                if (target) {
                    return state.inbox.filter((item) => {
                        return item.target == target && !item.seen
                    }).length
                }
                return state.inbox.filter((item) => !item.seen).length
            }
        },
        timeRemaining: (state) => {
            const timeScope: number = useAppConfig()?.ntm?.messageTime ?? 20;
            return state.timer === timeScope ? timeScope : state.timer % timeScope
        },
    },
    actions: {

        read(identifier: Message | number) {
            this.inbox.map(item => {
                if (item?.id && (identifier?.id == item.id || identifier == item?.id)) {
                    item.seen = true;
                }
                return item;
            })
        },
        readAll(target?: string) {
            this.inbox.map(item => {
                if (target) {
                    if (item?.target == target) {
                        item.seen = true;
                    }
                } else {
                    item.seen = true;
                }
                return item;
            })
        },
        pushMessage(item: Message) {
            // `this` is the store instance
            if (typeof item?.message == 'string') {
                item.seen = false
                item.show = true
                item.id = Date.now() + this.count()
                this.inbox.push(item)
            } else {
                console.warn('Message is not valid.', item)
            }
        }
    },
})
