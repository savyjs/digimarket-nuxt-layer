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
        archive: [] as Array<Message>,
        interval: null,
        timer: 0
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
    },
    actions: {
        runInterval(target ?: string) {
            const timeScope: number = useAppConfig()?.ntm?.messageTime ?? 20;

            this.timer = this.count(target) * timeScope;
            if (this.timer > 0 && this.count()) {
                this.interval = setInterval(() => {
                    if (this.timer == 0 || this.timer % timeScope == 0) {
                        this.inbox.pop();
                    }
                    if (this.timer < 1) this.clearTimer();
                    else if (this.timer > 0) this.timer--;
                }, 1000);
            } else {
                this.clearTimer();
            }
        },
        clearTimer() {
            clearInterval(this.interval);
            this.interval = null;
            this.timer = 0;
        },
        read(identifier: Message | number) {
            this.inbox.map(item => {
                if (item?.id && (identifier?.id == item.id || identifier == item?.id)) {
                    item.seen = true;
                }
                return item;
            })
            this.runInterval();
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
            this.runInterval();
        },
        pushMessage(item: Message) {
            // `this` is the store instance
            if (typeof item?.message == 'string') {
                item.seen = false
                item.id = Date.now() + this.count()
                this.inbox.push(item)
                this.runInterval();
            } else {
                console.warn('Message is not valid.', item)
            }
        }
    },
})
