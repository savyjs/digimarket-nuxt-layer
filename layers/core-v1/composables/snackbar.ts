export const useSnackbar = ((msg: string | number | [], type: "info" | "error" | "warning" | "success" = "info") => {
    const messages = useMessages();

    messages.$subscribe((mutation, state) => {
        // import { MutationType } from 'pinia'
        // mutation.type // 'direct' | 'patch object' | 'patch function'
        // same as cartStore.$id
        // mutation.storeId // 'cart'
        // only available with mutation.type === 'patch object'
        // mutation.payload // patch object passed to cartStore.$patch()

        // persist the whole state to the local storage whenever it changes
        // localStorage.setItem('cart', JSON.stringify(state))
        alert(messages.target('snackbar'))
    })
})