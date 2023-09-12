import {ref, watch} from 'vue'
import {useState} from "nuxt/app";

export const useRtl = () => {
    let appConfig = useAppConfig()
    const rtl = useState('rtl', () => !!appConfig?.digimarket?.rtl || false)
    watch(rtl, (value: boolean) => {
        localStorage.rtl = value ? true : false
    })
    return rtl;
}