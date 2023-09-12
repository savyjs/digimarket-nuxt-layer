import {defineNuxtPlugin} from "#app";
import {watch} from "vue";


export default defineNuxtPlugin(nuxtApp => {

    const darkmode = useState("darkmode", () => localStorage.theme == 'dark')
    watch(darkmode, (value: boolean) => {
        if (value) {
            document.getElementsByTagName("html")[0].setAttribute('data-mode', 'dark')
        } else {
            document.getElementsByTagName("html")[0].removeAttribute('data-mode')
        }
        localStorage.theme = value ? 'dark' : 'light'
    })
})