import {useI18n} from "vue-i18n";

export const useExtendMessages = async (messages: any) => {
    const nuxtApp = useNuxtApp();
    useI18n({
        messages
    })

}