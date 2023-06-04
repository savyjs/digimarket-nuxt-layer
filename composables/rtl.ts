import {ref, watch} from 'vue'
import {useState} from "nuxt/app";
import appConfig from "~/app.config";

export const useRtl = () => {
    let appConfig = useAppConfig()
    const rtl = useState('rtl', () => !!appConfig?.digimarket?.rtl)
    watch(rtl, (value: boolean) => {

        localStorage.rtl = value ? true : false
    })
    return rtl;
}